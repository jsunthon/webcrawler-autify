const cheerio = require('cheerio')

/**
 * Parse data about the HTML 
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
  parseHtmlData
}
