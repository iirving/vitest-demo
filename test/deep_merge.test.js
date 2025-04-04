import { test, expect } from 'vitest'
import { deepMerge } from '/src/util/deep_merge.js'

test('deepMerge with simple objects', () => {
  const target = { a: 1, b: 2 }
  const source = { b: 3, c: 4 }
  const result = deepMerge(target, source)
  expect(result).toEqual({ a: 1, b: 3, c: 4 })
})

test('deepMerge with nested objects', () => {
  const target = { a: { b: 1 }, c: 2 }
  const source = { a: { d: 3 }, e: 4 }
  const result = deepMerge(target, source)
  expect(result).toEqual({ a: { b: 1, d: 3 }, c: 2, e: 4 })
})

test('deepMerge with overlap ', () => {
  const target = { a: { b: 1 }, c: 2 }
  const source = { a: { b: 3 }, c: 4 }
  const result = deepMerge(target, source)
  expect(result).toEqual({ a: { b: 3 }, c: 4 })
})
