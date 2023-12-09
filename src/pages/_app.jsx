import App from 'next/app'
import Link from "next/link"

import "../app/globals.css" 
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}