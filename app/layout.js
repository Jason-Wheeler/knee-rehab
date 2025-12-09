import './globals.css'

export const metadata = {
  title: 'Knee Rehab Tracker',
  description: 'Track your knee rehabilitation progress after meniscus surgery',
  manifest: '/manifest.json',
  themeColor: '#0f766e',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Knee Rehab',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Knee Rehab" />
        <meta name="theme-color" content="#0f766e" />
      </head>
      <body>{children}</body>
    </html>
  )
}
