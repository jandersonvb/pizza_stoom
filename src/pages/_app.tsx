import type { AppProps } from 'next/app'

import '../styles/global.scss'
import { PizzaContextProvider } from '@/context/PizzaContext'
import { Header } from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PizzaContextProvider>
      <Header />

      <Component {...pageProps} />
    </PizzaContextProvider>
  )
}
