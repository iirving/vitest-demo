import { test, expect, vi } from 'vitest'
import { loadConfig } from '@/util/fs'

vi.mock('fs', async (importOriginal) => {
  const fsActual = await importOriginal()
  return {
    default: {
      ...fsActual,
      readFileSync() {
        return JSON.stringify({ name: 'from fs mock' })
      },
      existsSync() {
        return true
      },
    },
  }
})

test('with fs', async () => {
  const result = await loadConfig()
  expect(result).toEqual({ name: 'from fs mock' })
})
