# gulp-touch

Set the file modification and accessed time of a file copied using gulp to "now"

## Install

Install with [npm](https://npmjs.org/package/gulp-touch)

```
npm install --save-dev gulp-touch
```

## Example

```js
var gulp = require('gulp');
var touch = require('gulp-touch');

gulp.task('default', function() {
	gulp.src('./src/**/*')
		.pipe(gulp.dest('./dest'))
		.pipe(touch());
});
```