'use strict';

const fs = require('fs'),
	map = require('map-stream');

module.exports = function(options) {
	return map(function(file, cb) {
		if (file.isNull()) {
			return cb(null, file);
		}

		// Update file modification and access time
		return fs.utimes(file.path, new Date(), new Date(), () => {
			cb(null, file)
		});
	});
};