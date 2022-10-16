const { getArgData } = require('./modules/cmdArg')
const { downloadHtml } = require('./modules/html')
const { parseHtmlData } = require('./modules/metadata')

async function fetch (url, isMetaData) {
  const html = await downloadHtml(url)

  if (isMetaData) {
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

startFetching().then(() => console.log('Finished fetching HTML'))
