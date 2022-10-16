const { getArgData } = require('./modules/commandLine')
const { downloadHtml, parseHtmlData } = require('./modules/html')

async function fetch (url, isMetaData) {
  const html = await downloadHtml(url)

  if (isMetaData && html) {
    const htmlData = parseHtmlData(html)
    htmlData.site = url
    console.log(JSON.stringify(htmlData, null, 2))
  }
}

async function startFetching () {
  const argData = getArgData()
  const urls = argData.urls

  const fetchPromises = urls.map(url => fetch(url, argData.isMetaData))
  await Promise.all(fetchPromises)
}

startFetching().then(() => console.debug('Finished fetching HTML'))
