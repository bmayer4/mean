//adding front ned to amazon s3, backend to heroku, connecting them together
// amazon s3, created bucket for project, made permissions public.
// in frontend, ng build --prod, created dist/frontend folder
// in bucket, go to upload, select all files in dist folder. After,
// in static website hosting, set index.html under index document.
// it gives me url http://ps-social-app.s3-website.us-east-2.amazonaws.com/
// right env is set to localhost:3000 backend, need to change it to heroku after adding backend to it
// then run ng build --prod again, reupload on s3 bucket again. 