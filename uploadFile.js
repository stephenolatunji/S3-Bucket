const fs = require('fs');
const AWS = require('aws-sdk');


const ID = 'AKIAIGBUEWWWS4DP6XZA';

const SECRET = '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';

const BUCKET_NAME = 'file-upload';

const uploadFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket: BUCKET_NAME,
        Key: './library pic.jpg',
        Body: fileContent,
        Storage: 'S3 Glacier Storage',
        ContentType: 'image/jpg'

    };

    s3.upload(params, (err) => {
        if(err){
            throw err
        }
        console.log(`File Uploaded. ${data.Location}`)
    })
}
