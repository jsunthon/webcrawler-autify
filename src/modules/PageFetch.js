const axios = require('axios')
const cheerio = require('cheerio')

const HTTP_OK = 200

/**
 * Fetches web page html of a given url
 * @param {} url the URL to fetch the web page for
 * @returns an object that contains jQuery parseable HTML
 */
async function fetchHtml (url) {
  const resp = await axios(url)
  if (resp.status !== HTTP_OK) {
    throw new Error(`Bad HTTP response ${resp.status}`)
  }

  const data = resp.data
  return cheerio.load(data)
}

module.exports = {
  fetchHtml
}
