import { ref } from 'vue'

export function useCycleList(list) {
  const current = ref(list[0])

  function getIndex() {
    return list.indexOf(current.value)
  }

  function next() {
    // const index = list.indexOf(current.value)
    current.value = list[(getIndex() + 1) % list.length]
  }

  function prev() {
    // const index = list.indexOf(current.value)
    current.value = list[(getIndex() - 1 + list.length) % list.length]
  }

  return {
    current,
    next,
    prev,
  }
}
