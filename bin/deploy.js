#! /usr/bin/env node

'use strict';

var minimist = require('minimist');
var fs = require('fs');

var argv = minimist(process.argv.slice(2), {string: 'bucket'});

var bucket = argv.bucket;
if (!bucket) {
    throw "Bucket name needs to be provided. Use --bucket."
}

if (!fs.existsSync('public')) {
    throw "Public folder not found. Nothing to deploy. Consider calling hexo generate first."
}

console.log('Start deploying to ' + bucket);