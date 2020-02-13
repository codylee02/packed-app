module.exports = {
  PORT: process.env.PORT || 8080,
  // other stuff
  API_BASE_URL:
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_BASE_URL
      : "https://immense-atoll-77292.herokuapp.com/api",
  API_KEY: process.env.REACT_APP_API_KEY
};
