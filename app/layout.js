'use client'

import { META } from 'public/data'

import cx from 'clsx'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Manrope } from 'next/font/google'
import 'styles/globals.css'

const manrope = Manrope({ weight: ['400', '800'], subsets: ['latin'] })

export default function RootLayout({ children }) {
  const htmlCx = cx(manrope.className)
  const htmlStyles = {
    color: META.color,
    background: 'linear-gradient(195deg, #96639B 0px, #A56791 120px, #F78995 480px, #F6B4B4 800px)',
  }

  return (
    <ParallaxProvider>
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
        <body>{children}</body>
      </html>
    </ParallaxProvider>
  )
}
