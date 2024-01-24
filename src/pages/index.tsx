import { Header } from '@/components/Header'
import { PizzaDay } from '@/components/PizzaDay'
import Head from 'next/head'

import styles from './index.module.scss'
import { PizzaDough } from '@/components/PizzaDough'
import { GetStaticProps } from 'next'
import { api } from '@/services/api'
import { usePizza } from '@/context/PizzaContext'

export default function Home({ igredients }) {
  const teste = usePizza()

  console.log('CONTEXTO', teste)

  return (
    <div>
      <Head>
        <title>Pizza Stoom</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <PizzaDay />
        <PizzaDough ingredients={igredients} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/ingredients')

  const igredients = data

  return {
    props: { igredients },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
