const AWS = require('aws-sdk');

const ID = 'AKIAIGBUEWWWS4DP6XZA';

const SECRET = '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';

const BUCKET_NAME = 'file-upload';

const s3 = new AWS.S3({
    accessKeyId: ID, 
    secretAccessKey: SECRET
});

const params = {
    Bucket: BUCKET_NAME, 
    CreateBucketConfiguration: {
        LocationConstraint: 'us-east-2'
    }
};

s3.createBucket(params, (err) => {
    if(err){
        console.log(err, err.stack);
    }else{
        console.log('Bucket Created', data.Location)
    }
})
