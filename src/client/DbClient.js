const { MONGO_DB_URL, DB_NAME } = require('../settings')
const { MongoClient } = require('mongodb')

// collection name will never change across environments
const COLLECTION_NAME = 'webpages'

// db client specifically for the web page table/collection
class WebPageDbClient {
  constructor () {
    this.client = new MongoClient(MONGO_DB_URL)
  }

  async connect () {
    console.log('Connecting to DB....')
    await this.client.connect()
    console.log('Successfully connected to DB!')

    this.db = this.client.db(DB_NAME)
    this.collection = this.db.collection(COLLECTION_NAME);
  }

  async save(items) {
    return await this.collection.insertMany(items)
  }
}

module.exports = {
  WebPageDbClient
}
