const METADATA_ARG = '--metadata'

/**
 * Read command line args and return an object containing
 * the URLs to crawl and whether or not to print out the metaData
 * @returns an object containing urls and metadata flag
 */
function getArgData () {
  const args = process.argv

  if (args.length < 3) {
    throw new Error('No arguments were specified')
  }

  const isMetaData = args[2] === METADATA_ARG
  const startIdx = isMetaData ? 3 : 2

  const urls = []
  for (let i = startIdx; i < args.length; i++) {
    urls.push(args[i])
  }

  return {
    isMetaData,
    urls
  }
}

module.exports = {
  getArgData
}