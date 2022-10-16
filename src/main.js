const { getArgData } = require('./modules/cmdArg')
const { downloadHtml } = require('./modules/html')

async function fetchHtmls (urls) {
  const htmls = []

  for (const url of urls) {
    const html = await downloadHtml(url)
    htmls.push(html)
  }

  return htmls
}

async function main () {
  const argData = getArgData()
  const urls = argData.urls
  const htmls = await fetchHtmls(urls)

  return htmls
}

main().then(() => console.log('Successfully downloaded HTMLs'))
