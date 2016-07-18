# time-stats

> Node preload to replace console.time calls with better ones.

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

If you have Node code that measures individual actions using `console.time` and `console.timeEnd`
calls, you might want to know actual stats, like the median of the calls, min, max, mean.
But you don't want to change your code to do this. Just preload `time-stats` and you will get
this information.

```js
function timeDelay (ms) {
  const label = 'delay'
  console.time(label)
  return delay(100).then(() => {
    console.timeEnd(label)
  })
}
// calling delay 5 times
```

before

```sh
node test/index.js
delay: 107.262ms
delay: 105.148ms
delay: 104.336ms
delay: 104.093ms
delay: 105.262ms
```

after

```
npm i time-stats
node -r time-stats test/index.js
delay: 107.673ms, min 107.673ms max 107.673ms median 107.673ms mean 107.673ms n=1
delay: 103.482ms, min 103.482ms max 107.673ms median 107.673ms mean 105.578ms n=2
delay: 102.874ms, min 102.874ms max 107.673ms median 103.482ms mean 104.677ms n=3
delay: 101.869ms, min 101.869ms max 107.673ms median 103.482ms mean 103.975ms n=4
delay: 103.503ms, min 101.869ms max 107.673ms median 103.482ms mean 103.88ms n=5
```

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2016

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)


License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/time-stats/issues) on Github

## MIT License

Copyright (c) 2016 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/time-stats.svg?downloads=true
[npm-url]: https://npmjs.org/package/time-stats
[ci-image]: https://travis-ci.org/bahmutov/time-stats.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/time-stats
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
