'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Credit to the Reactstrap project for this gem, https://github.com/reactstrap/reactstrap/blob/master/src/utils.js
// Maps class names to a CSS module.
var mapToCssModules = function mapToCssModules(className, cssModule) {
	if (!cssModule) {
		return className;
	}

	return className.split(' ').map(function (c) {
		return cssModule[c] || c;
	}).join(' ');
};

exports.default = mapToCssModules;