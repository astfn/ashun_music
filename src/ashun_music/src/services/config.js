const devBaseURL = "http://123.207.32.32:9001";
const productBaseURL = "http://production.org";
const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : productBaseURL;

const TIMEOUT = 5000;

export { BASE_URL, TIMEOUT };
