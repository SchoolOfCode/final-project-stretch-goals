const withImages = require("next-images");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

//either wrap all inside of images
module.exports = phase =>
  withImages(
    phase == PHASE_DEVELOPMENT_SERVER
      ? {
          // environment varibales for local development
          env: {
            API_URL: "https://gcubq6orwa.execute-api.eu-west-1.amazonaws.com",
            IDP_DOMAIN: "doceologin.auth.eu-west-1.amazoncognito.com",
            USER_POOL_ID: "eu-west-1_9RRibpIcX",
            USER_POOL_CLIENT_ID: "3ousga01ph8f9rpfbj0a1ohtef",
            REDIRECT_SIGN_IN: "https://localhost:3000/token",
            REDIRECT_SIGN_OUT: "https://localhost:3000/",
            AUTH_COOKIE_DOMAIN: "localhost"
          }
        }
      : {
          // environment varibales for production
          env: {
            API_URL: "https://gcubq6orwa.execute-api.eu-west-1.amazonaws.com",
            IDP_DOMAIN: "doceologin.auth.eu-west-1.amazoncognito.com",
            USER_POOL_ID: "eu-west-1_9RRibpIcX",
            USER_POOL_CLIENT_ID: "3ousga01ph8f9rpfbj0a1ohtef",
            REDIRECT_SIGN_IN: "https://zealous-tesla-ddd24c.netlify.app/token",
            REDIRECT_SIGN_OUT: "https://zealous-tesla-ddd24c.netlify.app/",
            AUTH_COOKIE_DOMAIN: "zealous-tesla-ddd24c.netlify.app"
          }
        }
  );

//module.exports = phase => {};

// // // next.config.js
// const withCSS = require("@zeit/next-css");

// module.exports = withCSS({
//   cssLoaderOptions: {
//     url: false
//   }
// });

// module.exports = {
//   typescript: {
//     ignoreDevErrors: true
//   }
// };
