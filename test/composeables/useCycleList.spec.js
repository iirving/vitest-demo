import { test, expect } from 'vitest'
import { useCycleList } from '@/composeables/useCycleList'

test('composeable/useCycleList', () => {
  const listOfItems = ['a', 'b', 'c']

  const { current, next, prev } = useCycleList(listOfItems)

  expect(current.value).toBe('a')

  next()
  expect(current.value).toBe('b')

  next()
  expect(current.value).toBe('c')

  next()
  expect(current.value).toBe('a')

  prev()
  expect(current.value).toBe('c')
})
