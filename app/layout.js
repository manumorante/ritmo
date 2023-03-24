import { INFO, META } from 'public/data'
import 'styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
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
        <div className='Layout mx-auto max-w-3xl p-8'>{children}</div>
      </body>
    </html>
  )
}
