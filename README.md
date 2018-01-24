# gulp-touch-fd

Set the file modification and accessed time of a file copied using gulp to "now"

## Fork

This is a fork of [git.smhi.se/a001867/gulp-touch](https://git.smhi.se/a001867/gulp-touch). It corrects an error with the callback and is made compatible for Node.js v8.x.

## Install with [npm](https://npmjs.org/)

```
npm install --save-dev gulp-touch-fd@funkedigital/gulp-touch-fd
```

## Install with [Yarn](https://yarnpkg.com/)

```
yarn add gulp-touch-fd@funkedigital/gulp-touch-fd -D
```

## Example

```js
var gulp = require('gulp');
var touch = require('gulp-touch-fd');

gulp.task('default', function() {
    gulp.src('./src/**/*')
        .pipe(gulp.dest('./dest'))
        .pipe(touch());
});
```