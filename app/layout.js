import { META } from 'public/data'

import cx from 'clsx'
import { Sora } from 'next/font/google'
import 'styles/globals.css'

const sora = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  const htmlCx = cx(sora.className)

  return (
    <html className={htmlCx}>
      <head>
        <title>{META.title}</title>

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={META.description} />
        <meta name='theme-color' content={META.bgcolor} />

        <meta property='og:title' content={META.title} />
        <meta property='og:description' content={META.description} />
        <meta property='og:url' content={META.url} />
        <meta property='og:image' content={META.image} />
        <meta property='og:type' content='website' />
      </head>
      <body>{children}</body>
    </html>
  )
}
