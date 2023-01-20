import type { AppProps } from 'next/app'
import '../styles/noddy_styles.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
  }