# webcrawler-autify
CLI that fetches web pages and downloads the HTML locally.

# Running Locally

## Requirements
* Node.js 16.X

## Build Dependencies
* `npm install`

## Run the CLI tool
`node src/main.js <arguments>`

#### Examples
We can pass in many URLS to the script and it will download an HTML page for each of them:
* `node src/main.js https://www.google.com https://autify.com`

If the first argument is `--metadata`, metadata for each URL will be printed:
* `node src/main.js --metadata https://www.google.com https://autify.com`

# Running in Docker

## Build Image
`docker build . -t fetch`

## Fetch Web Page
We can fetch multiple web pages at a time, just pass in the URLs like so. The pages will be downloaded to `/usr/src` in the container.
 * `docker run fetch https://www.google.com https://autify.com`

## Fetch Web Page with Metadata
This will fetch the web pages and also output metadata in the console
* `docker run fetch --metadata https://www.google.com https://autify.com`

example output:

<pre>{
  "num_links": 17,
  "images": 1,
  "last_fetch": "Sun, 16 Oct 2022 22:34:34 GMT",
  "site": "https://www.google.com"
}
{
  "num_links": 69,
  "images": 119,
  "last_fetch": "Sun, 16 Oct 2022 22:34:34 GMT",
  "site": "https://autify.com"
}<code>