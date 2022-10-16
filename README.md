# webcrawler-autify
CLI that fetche/downloads the HTML locally.

## Build Image
`docker build . -t fetch`

## Fetch Web Page
We can fetch multiple web pages at a time, just pass in the URLs like so. The pages will be downloaded to the current directory in the container.
 * `docker run fetch https://www.google.com https://autify.com`

## Fetch Web Page with Metadata
This will fetch the web pages and also output metadata in the console
* `docker run -d fetch --metadata https://www.google.com https://autify.com`

output:

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