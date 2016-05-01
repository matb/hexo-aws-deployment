# hexo-to-s3

Deploy your hexo site from your build server directly to S3!  

## Why use hexo-to-s3?
hexo alreday offers a [mechanism](https://hexo.io/docs/deployment.html) to deploy your site to various targets. But this mechanism involves generating the files from hexo before deploying them. 
If you want to follow a staging process, you want to generate your files once and deploy them to various servers. A typical process could look like this: 
 
* Generate a new version of your site using ```hexo generate```
* Publish the public folder as artefact
* Deploy your site to a test environment
* Verify the new version
* Promote this version to your production site

## How to use it?

Install hexo-to-s3:

```
npm install hexo-to-s3 --save-dev
```

You have multiple options to execute a deployment.

### As an entry in your package.json

Add this entry to your package.json:

```
    {
        "scripts": {
            "deploy": "hexo-to-s3"
        }  
    }
```

Execute this npm command to deploy:

```
    npm run-script deploy --bucket YOUR_BUCKET_NAME
```

### Directly from node_modules

Execute this npm command to deploy:

```
    node node_modules/hexo-to-s3/bin/hexo-to-s3.js --bucket YOUR_BUCKET_NAME
```

## Parameters
### bucket
Mandatory parameter that defines the upload target

### region
Optional, defines the region that is used for the upload. If this parameter is not set, hexo-to-s3 tries to read the environment variable AWS_DEFAULT_REGION.

## Configure your AWS account

hexo-to-s3 uses the Amazon AWS SDK underneath. You can use the usual means to load credentials. 
More information can be found [here](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html).

