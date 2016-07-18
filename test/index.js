'use strict'

// normal run prints something like
// delay: 106.526ms

function delay (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

const label = 'delay'
console.time(label)
delay(100).then(() => {
  console.timeEnd(label)
})
