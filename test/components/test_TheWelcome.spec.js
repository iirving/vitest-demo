import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import TheWelcome from '@/components/TheWelcome.vue'
import WelcomeItem from '@/components/WelcomeItem.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import ToolingIcon from '@/components/icons/IconTooling.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import CommunityIcon from '@/components/icons/IconCommunity.vue'
import SupportIcon from '@/components/icons/IconSupport.vue'

describe('TheWelcome.vue', () => {
  it('renders all WelcomeItem components with correct props', () => {
    const wrapper = mount(TheWelcome)

    const welcomeItems = wrapper.findAllComponents(WelcomeItem)
    expect(welcomeItems.length).toBe(5)

    const headings = ['Documentation', 'Tooling', 'Ecosystem', 'Community', 'Support Vue']
    const icons = [DocumentationIcon, ToolingIcon, EcosystemIcon, CommunityIcon, SupportIcon]

    welcomeItems.forEach((item, index) => {
      expect(item.findComponent(icons[index]).exists()).toBe(true)
      expect(item.text()).toContain(headings[index])
    })
  })

  it('calls openReadmeInEditor when README.md link is clicked', async () => {
    const wrapper = mount(TheWelcome)
    const readmeLink = wrapper.find('a[href="javascript:void(0)"]')

    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        status: 200,
        text: () => Promise.resolve('README opened'),
      }),
    )

    await readmeLink.trigger('click')
    expect(globalThis.fetch).toHaveBeenCalledWith('/__open-in-editor?file=README.md')
  })

  it('logs a message when the component is mounted', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    mount(TheWelcome)
    expect(consoleSpy).toHaveBeenCalledWith('TheWelcome component has been mounted')
    consoleSpy.mockRestore()
  })

  it.skip('cycles to the next item and logs the current item', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    const wrapper = mount(TheWelcome, {
      data() {
        return {
          currentItem: 'Documentation',
        }
      },
      methods: {
        cycleToNext() {
          const items = ['Documentation', 'Tooling', 'Ecosystem', 'Community', 'Support Vue']
          const currentIndex = items.indexOf(this.currentItem)
          this.currentItem = items[(currentIndex + 1) % items.length]
          console.log('Cycled to next item:', this.currentItem)
          console.log('Current item:', this.currentItem)
        },
      },
    })

    // Simulate cycling to the next item
    await wrapper.vm.cycleToNext()

    expect(consoleSpy).toHaveBeenCalledWith('Cycled to next item:', expect.any(String))
    expect(consoleSpy).toHaveBeenCalledWith('Current item:', expect.any(String))
    consoleSpy.mockRestore()
  })
})
