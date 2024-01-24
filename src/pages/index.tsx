import { PizzaDay } from '@/components/PizzaDay'
import Head from 'next/head'

import { PizzaDough } from '@/components/PizzaDough'
import { api } from '@/services/api'
import { GetStaticProps } from 'next'
import styles from './index.module.scss'

export default function Home({ igredients, pizzaDay }: any) {
  return (
    <div>
      <Head>
        <title>Pizza Stoom</title>
      </Head>
      <div className={styles.container}>
        <PizzaDay pizza={pizzaDay} />
        <PizzaDough ingredients={igredients} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/ingredients')

  // pegar pizzas
  const response = await api.get('/pizzas')

  const pizzaDay = response.data[1]

  const igredients = data

  return {
    props: { igredients, pizzaDay },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
