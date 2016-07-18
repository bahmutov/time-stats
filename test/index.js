'use strict'

// normal run prints something like
// delay: 106.526ms

function delay (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

function timeDelay (ms) {
  const label = 'delay'
  console.time(label)
  return delay(100).then(() => {
    console.timeEnd(label)
  })
}

const delay100 = timeDelay.bind(null, 100)
timeDelay()
  .then(timeDelay)
  .then(timeDelay)
  .then(timeDelay)
  .then(timeDelay)
