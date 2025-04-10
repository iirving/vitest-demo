import { test, expect, vi } from 'vitest'

function getCurrentTime() {
  return new Date().toTimeString().slice(0, 5)
}

test('getCurrentTime', () => {
  vi.setSystemTime(new Date('2023-10-01 14:13'))
  expect(getCurrentTime()).toBe('14:13')
  vi.useRealTimers()
})
