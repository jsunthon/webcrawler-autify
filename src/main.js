const { getArgData } = require('./modules/CommandLineArg')
const { fetchHtml } = require('./modules/PageFetch')

async function fetchHtmls (urls) {
  const htmls = []

  for (const url of urls) {
    const html = await fetchHtml(url)
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
