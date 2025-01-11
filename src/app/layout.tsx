import { Providers } from './providers'

export const metadata = {
  title: 'Claude Test Next',
  description: 'A Next.js application with Chakra UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}