import { expect, test } from 'vitest'
import { sum } from '../../src/unit/sum.js'

test('1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3)
})