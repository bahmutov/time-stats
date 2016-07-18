'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('stats', () => {
  const stats = require('./stats')
  const numbers = [1, 10, 3, 4, 7]

  it('is a function', () => {
    la(is.fn(stats))
  })

  it('returns an object', () => {
    const s = stats(numbers)
    la(is.object(s))
  })

  it('computes min', () => {
    const s = stats(numbers)
    la(s.min === 1, s)
  })

  it('computes max', () => {
    const s = stats(numbers)
    la(s.max === 10, s)
  })

  it('computes median', () => {
    const s = stats(numbers)
    la(s.median === 4, s)
  })

  it('computes mean (average)', () => {
    const s = stats(numbers)
    la(s.mean === 5, s)
  })
})
