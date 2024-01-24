import { Header } from '@/components/Header'
import { PizzaDay } from '@/components/PizzaDay'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Stoom</title>
      </Head>
      <Header />
      <PizzaDay />
    </div>
  )
}
