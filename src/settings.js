function getOrDefault(key, defaultVal) {
  return process.env[key]? process.env[key] : defaultVal
}

const MONGO_DB_URL = getOrDefault('MONGO_DB_URL', 'mongodb://localhost:27017')
const DB_NAME = getOrDefault('DB_NAME', 'webCrawlerDb')

module.exports = {
  MONGO_DB_URL,
  DB_NAME
}
