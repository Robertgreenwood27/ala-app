import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Header />
      <body className='mt-20'>
        <Main />
        <NextScript />
      </body>
      <Footer/>
    </Html>
  )
}
