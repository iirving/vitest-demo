import { readFileSync, existsSync } from 'fs'

export function loadConfig() {
  let file = 'testConfig.json'
  if (!existsSync(file)) return undefined
  return JSON.parse(readFileSync(file, 'utf-8'))
}
