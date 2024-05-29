// learn more about HTTP functions here: https://arc.codes/http
import arc from "@architect/functions"
import { readFileSync } from 'fs'
import { join } from 'path'
import { Arcdown } from 'arcdown'
import Html from "@architect/views/modules/document/html.mjs"


// const {
//   frontmatter, // attributes from frontmatter
//   html,        // the good stuff: HTML!
//   slug,        // a URL-friendly slug
//   title,       // document title from the frontmatter
//   tocHtml,     // an HTML table of contents
// } = await arcdown.render(mdString)



export async function handler (req) {

  const { pathParameters } = req
  const project = `${pathParameters.id}`
  
  const arcdown = new Arcdown()

  const filePath = join(
    new URL('.', import.meta.url).pathname,
    'node_modules',
		'@architect',
		'views',
    'projects',
  	 project
  )

  const fromFile = await arcdown.render(readFileSync(filePath, 'utf8'))

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Html({
      html: fromFile.html,
      title: project
    })
  }
}