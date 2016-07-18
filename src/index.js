'use strict'

// save the old console.time and .timeEnd methods
// const _time = console.time.bind(console)
// const _timeEnd = console.timeEnd.bind(console)

function checkLabel (label) {
  if (!label) {
    throw new Error('missing console.time label')
  }
}

const timings = {}
console.time = function timeStats (label) {
  checkLabel(label)
  timings[label] = {
    started: process.hrtime()
  }
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
  console.log('%s: %dms', label, ms.toFixed(3))
}
