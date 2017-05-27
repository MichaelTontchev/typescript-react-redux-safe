'use strict';

// Dependencies
var gulp = require('gulp');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var tsify = require("tsify");
var eventStream = require('event-stream');
var rename = require('gulp-rename');

// Shared variables
var sourceFiles = {};
sourceFiles.root = 'src/';
sourceFiles.htmlFilesRoot = sourceFiles.root;
sourceFiles.allhtmlFilesSelector = sourceFiles.htmlFilesRoot + '*.html';

var targetFiles = {};
targetFiles.root = 'target/';
targetFiles.staticRoot = targetFiles.root + 'static/';
targetFiles.jsRoot = targetFiles.staticRoot + 'scripts/';
targetFiles.htmlFilesRoot = targetFiles.root + '';

// Task definitions
gulp.task('default', ['scripts', 'htmlFiles']);

var scriptEntrypoints = ['index.tsx'];
var browserifiedConfig = {
	basedir: './src/scripts/',
	debug: true,
	cache: {},
	packageCache: {}
};

gulp.task('scripts', () => { unwatchifiedScripts() });

function unwatchifiedScripts(entryPoints) {
	entryPoints = entryPoints || scriptEntrypoints;

	var streams = entryPoints.map((entrypointName) => {
		var currentBrowserifyConfig = Object.assign({}, browserifiedConfig);
		currentBrowserifyConfig.entries = entrypointName;

		var browserified = browserify(currentBrowserifyConfig)
			.plugin(tsify);

		return doScripts(
			browserified,
			entrypointName);
	});

	return eventStream.merge(streams);
}

function doScripts(specificBrowserify, entrypointName) {
	return specificBrowserify
		.bundle()
		.pipe(source(entrypointName))
		.pipe(rename({
			extname: '.js'
		}))
		.pipe(gulp.dest(targetFiles.jsRoot));
}

gulp.task('htmlFiles', function () {
	gulp.src(sourceFiles.allhtmlFilesSelector)
		.pipe(gulp.dest(targetFiles.htmlFilesRoot));
});