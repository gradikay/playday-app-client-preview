// This file is exported to src/index.js
// **** NOTE **** FOR SECURITY REASONS -- Put variable in a .env (file) --
// ------ Communication with Backend / API

// Development Configuration from AWS
const dev = {
    s3: {
        REGION: "us-east-2", 
        ATTACHEMENTS_BUCKET_NAME: "playday-app-services-dev-attachmentsbucket-1olh1tfxc2esc"
    },
    apiGateway: {
        REGION: "us-east-2",
        SERVICE_ENDPOINT: "https://eq7ip9np7g.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_Ky93pDw9u",
        USER_POOL_CLIENT_ID: "348fjaigbt983qkn5bd93mnl68",
        IDENTITY_POOL_ID: "us-east-2:be0dce11-554c-4076-bd67-2bfd04a66b0d"
    }
};

// Production Configuration from AWS
const prod = {
    s3: {
        REGION: "...",
        ATTACHEMENTS_BUCKET_NAME: "..."
    },
    apiGateway: {
        REGION: "...",
        SERVICE_ENDPOINT: "..."
    },
    cognito: {
        REGION: "...",
        USER_POOL_ID: "...",
        USER_POOL_CLIENT_ID: "...",
        IDENTITY_POOL_ID: "..."
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 1000000,
    ...config
};