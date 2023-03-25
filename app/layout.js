/* eslint-disable @next/next/no-img-element */
import { INFO, META } from 'public/data'
import { Open_Sans } from 'next/font/google'
import cx from 'clsx'
import 'styles/globals.css'

const opensans = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const htmlStyles = { color: 'rgb(39 39 42)', backgroundColor: 'rgb(255 228 230)' }
  const htmlCx = cx(opensans.className)

  const layoutCx = cx('Layout mx-auto max-w-2xl p-8')

  const bgCx = cx('absolute -z-10 top-0 right-0 w-full h-[200%] object-cover opacity-40')

  return (
    <html className={htmlCx} style={htmlStyles}>
      <head>
        <title>{INFO.name}</title>

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
        <div className={layoutCx}>{children}</div>
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
