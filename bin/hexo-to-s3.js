#! /usr/bin/env node

'use strict';

var minimist = require('minimist');
var fs = require('fs');
var s3 = require('s3');
var AWS = require('aws-sdk');

var argv = minimist(process.argv.slice(2), {string: 'bucket'});

var bucket = argv.bucket;
if (!bucket) {
    throw 'Bucket name needs to be provided. Use --bucket.'
}

if (!fs.existsSync('public')) {
    throw 'Public folder not found. Nothing to deploy. Consider calling hexo generate first.'
}

console.log('Start deploying to ' + bucket);

var awsS3Client = new AWS.S3();
var options = {
    s3Client: awsS3Client
};
var client = s3.createClient(options);
var params = {
    localDir: 'public',
    deleteRemoved: true,
    s3Params: {
        Bucket: bucket,
        ACL: 'public-read'
    }
};

var uploader = client.uploadDir(params);
uploader.on('error', function (err) {
    console.error('Error while uploading: ', err.stack);
});
uploader.on('fileUploadEnd', function (localFilePath) {
    console.log('Uploaded: ' + localFilePath)
});
uploader.on('end', function () {
    console.log('Finished deploying to ' + bucket);
});