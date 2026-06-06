import { readFileSync } from 'fs'
import { join } from 'path'

export const metadata = {
  title: 'The Retention Economy — AmericaNext Institute',
  description: 'A Policy Platform for NYC Small Business',
}

export default function RetentionEconomyPage() {
  const html = readFileSync(join(process.cwd(), 'public/retention-economy.html'), 'utf-8')
  // Extract just the <body> content and <style> block to embed cleanly
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/)
  const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/)
  const style = styleMatch ? styleMatch[1] : ''
  const body = bodyMatch ? bodyMatch[1] : ''

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Retention Economy — AmericaNext Institute</title>
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </head>
      <body dangerouslySetInnerHTML={{ __html: body }} />
    </html>
  )
}
