'use strict'

function compare (a, b) {
  return a - b
}

function sumNumbers (list) {
  return list.reduce((sum, x) => sum + x, 0)
}

function stats (measurements) {
  const sorted = measurements.sort(compare)
  const middleIndex = Math.floor(sorted.length / 2)
  const sum = sumNumbers(measurements)
  return {
    min: sorted[0],
    max: sorted[sorted.length - 1],
    median: sorted[middleIndex],
    mean: sum / sorted.length
  }
}

module.exports = stats
