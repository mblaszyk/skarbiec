export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: "notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://blablabla.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_XXX",
    APP_CLIENT_ID: "YYYYYYYY",
    IDENTITY_POOL_ID: "ZZZZZZZZ"
  }
};
