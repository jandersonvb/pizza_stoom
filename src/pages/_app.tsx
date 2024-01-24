import type { AppProps } from 'next/app'

import '../styles/global.scss'
import { PizzaContextProvider } from '@/context/PizzaContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PizzaContextProvider>
      <Component {...pageProps} />
    </PizzaContextProvider>
  )
}
