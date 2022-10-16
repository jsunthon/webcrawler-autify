const axios = require('axios')
const fs = require('fs/promises')
const cheerio = require('cheerio')

const HTTP_OK = 200

/**
 * Download html from the following URL and saves it as a file with name `{{url}}.html`
 * @param {*} url the url to download
 * @returns the HTML
 */
async function downloadHtml (url) {
  try {
    const resp = await axios(url)
    if (resp.status !== HTTP_OK) {
      console.error(`Failed to download HTML for ${url}, HTTP status code ${resp.status}`)
    }

    const data = resp.data
    const urlObj = new URL(url)
    const fileName = `${urlObj.host}.html`
    await fs.writeFile(fileName, data)

    return data
  } catch (err) {
    console.error(`Failed to download HTML for ${url}, err: ${err.message}`)
  }
}

/* Parse data about the HTML
* @param {*} html the HTML to parse
* @returns JSON containing data about the HTML such as links, images, fetch time
*/
function parseHtmlData (html) {
  const $ = cheerio.load(html)
  return {
    num_links: $('a').length,
    images: $('img').length,
    last_fetch: new Date().toUTCString()
  }
}

module.exports = {
  downloadHtml,
  parseHtmlData
}
