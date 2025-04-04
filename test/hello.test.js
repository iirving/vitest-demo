import { test, expect } from 'vitest'

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}

test('basic test', () => {
  expect(1 + 1).toBe(2)
})

test('sum function', () => {
  expect(sum(1, 2)).toBe(3)
})
test('sum function with multiple arguments', () => {
  expect(sum(1, 2, 3)).toBe(6)
})
test('sum function with no arguments', () => {
  expect(sum()).toBe(0)
})
test('sum function with negative numbers', () => {
  expect(sum(-1, -2)).toBe(-3)
})
test('sum function with mixed numbers', () => {
  expect(sum(1, -2)).toBe(-1)
})
test('sum function with large numbers', () => {
  expect(sum(1000000, 2000000)).toBe(3000000)
})
test('sum function with decimal numbers', () => {
  expect(sum(1.5, 2.5)).toBe(4)
})
