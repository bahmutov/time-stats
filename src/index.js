'use strict'

// save the old console.time and .timeEnd methods
// const _time = console.time.bind(console)
// const _timeEnd = console.timeEnd.bind(console)

function checkLabel (label) {
  if (!label) {
    throw new Error('missing console.time label')
  }
}

const stats = require('./stats')

const timings = {}
console.time = function timeStats (label) {
  checkLabel(label)
  if (!timings[label]) {
    timings[label] = {
      measurements: []
    }
  }
  timings[label].started = process.hrtime()
}

console.timeEnd = function timeEndStats (label) {
  checkLabel(label)
  if (!timings[label]) {
    throw new Error('Cannot find timing for label ' + label)
  }
  const elapsed = process.hrtime(timings[label].started)
  const seconds = elapsed[0]
  const nanoseconds = elapsed[1]
  const ms = seconds * 1e3 + nanoseconds / 1e6

  timings[label].measurements.push(ms)

  const s = stats(timings[label].measurements)
  const resolution = 3
  console.log('%s: %dms, min %dms max %dms median %dms n=%d',
    label,
    ms.toFixed(resolution),
    s.min.toFixed(resolution),
    s.max.toFixed(resolution),
    s.median.toFixed(resolution),
    timings[label].measurements.length)
}
