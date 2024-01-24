import { Header } from '@/components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Stoom</title>
      </Head>
      <Header />
    </div>
  )
}
