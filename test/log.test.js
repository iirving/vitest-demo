import { logError } from '@/util/log'
import { test, expect, vi } from 'vitest'

test('logError', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  logError('Test error message')
  expect(consoleErrorSpy).toHaveBeenCalledWith('Test error message')
  consoleErrorSpy.mockRestore()
})

test('logError simple', () => {
  const spy = vi.spyOn(console, 'error')
  logError('Test error message')
  expect(spy).toHaveBeenCalledWith('Test error message')
  expect(spy).toHaveBeenCalledTimes(1)

  spy.mockReset()

  logError('Test another error message')
  expect(spy).toHaveBeenCalledWith('Test another error message')
  expect(spy).toHaveBeenCalledTimes(1)
})
