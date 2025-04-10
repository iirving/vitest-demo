import { test, expect, vi, beforeEach } from 'vitest'

function warnLater(message) {
  setTimeout(() => {
    console.warn(message)
  }, 2_000)
}

beforeEach(() => {
  vi.useFakeTimers()
})

test('warnLater', async () => {
  const logSpy = vi.spyOn(console, 'warn')

  warnLater('Test warning message')
  expect(logSpy).not.toHaveBeenCalled()

  // await new Promise((resolve) => setTimeout(resolve, 2_000))
  vi.advanceTimersByTime(1_000)
  expect(logSpy).not.toHaveBeenCalled()

  vi.advanceTimersToNextTimer()
  expect(logSpy).toHaveBeenCalledWith('Test warning message')
  expect(logSpy).toHaveBeenCalledTimes(1)
})
