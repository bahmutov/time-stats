'use strict'

function compare (a, b) {
  return a - b
}

function stats (measurements) {
  const sorted = measurements.sort(compare)
  const middleIndex = Math.floor(sorted.length / 2)
  return {
    min: sorted[0],
    max: sorted[sorted.length - 1],
    median: sorted[middleIndex]
  }
}

module.exports = stats
