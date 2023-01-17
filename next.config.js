const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    //개발단계
    return {
      env: {
        mysql_username: "",
        mysql_pwd: "",
        //...
      },
    };
  }
  //배포단계
  return {
    env: {
      mysql_username: "",
      mysql_pwd: "",
      //...
    },
  };
};

module.exports = nextConfig;
