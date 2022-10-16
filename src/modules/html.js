const axios = require('axios')
const fs = require('fs/promises')

const HTTP_OK = 200

/**
 * Download html from the following URL and saves it as a file with name `{{url}}.html`
 * @param {*} url the url to download
 * @returns the html data
 */
async function downloadHtml (url) {
  const resp = await axios(url)
  if (resp.status !== HTTP_OK) {
    throw new Error(`Failed to download HTML for ${url}, HTTP status code ${resp.status}`)
  }

  const data = resp.data

  const urlObj = new URL(url)
  const fileName = `${urlObj.host}.html`
  await fs.writeFile(fileName, data)

  return data
}

module.exports = {
  downloadHtml
}
