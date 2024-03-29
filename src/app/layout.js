import './globals.css'
import { Inter } from 'next/font/google'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '<Tom/>',
  description: 'My Developer portfolio :)',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
