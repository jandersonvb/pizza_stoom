import { Header } from '@/components/Header'
import { PizzaDay } from '@/components/PizzaDay'
import Head from 'next/head'

import styles from '../styles/index.module.scss'
import { PizzaDough } from '@/components/PizzaDough'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Stoom</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <PizzaDay />
        <PizzaDough
          ingredients={{
            massas: [
              {
                id: 1,
                title: 'Tradicional',
                price: 20,
                description: 'Massa fina e crocante',
                image: '/images/pizza-calabresa.jpg',
              },
              {
                id: 2,
                title: 'Pan',
                price: 25,
                description: 'Massa alta e fofinha',
                image: '/images/pizza-com-queijo.jpg',
              },
              {
                id: 3,
                title: 'Nova-iorquina',
                price: 30,
                description: 'Massa média e crocante',
                image: '/images/pizza-frango.jpg',
              },
            ],
          }}
        />
      </div>
    </div>
  )
}
