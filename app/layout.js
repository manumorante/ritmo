/* eslint-disable @next/next/no-img-element */
import { META } from 'public/data'
import { Montserrat } from 'next/font/google'
import cx from 'clsx'
import 'styles/globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const htmlStyles = { color: META.color, backgroundColor: META.bgcolor }
  const htmlCx = cx(montserrat.className)
  const bgCx = cx('absolute -z-10 top-0 right-0 w-full h-[200%] object-cover opacity-40')

  return (
    <html className={htmlCx} style={htmlStyles}>
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
      <body>
        {children}
        <img
          className={bgCx}
          loading='lazy'
          src='https://assets.website-files.com/5e0a5d9d743608d0f3ea6753/6405ec1049bd67549a85793f_Space.svg'
          alt='bg'
        />
      </body>
    </html>
  )
}
