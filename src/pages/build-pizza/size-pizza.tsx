import Head from 'next/head'
import { usePizza } from '@/context/PizzaContext'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import { BiCheck } from 'react-icons/bi'
import { api } from '../../services/api'
import styles from './build-pizza.module.scss'
import { StepProgress } from '@/components/Steps'

interface SizeProps {
  id: number
  title: string
  price: number
  image: string
  description: string
}

interface SizePizzaProps {
  sizes: SizeProps[]
}

export default function SizePizza({ sizes }: SizePizzaProps) {
  const { setTamanho, sumTotal } = usePizza()

  const router = useRouter()

  function addPizzaSize(size: string, price: number) {
    sumTotal(price)
    setTamanho(size)

    router.push('/build-pizza/filling-pizza')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tamanho - StoomPizza</title>
      </Head>
      <div className={styles.content}>
        <h1>Selecione o tamanho da Pizza</h1>
        <ul>
          {sizes.map((size) => (
            <li key={size.id}>
              <div className={styles.modal}>
                <Image
                  src={size.image}
                  alt={size.title}
                  width={300}
                  height={300}
                  quality={100}
                />
                <div className={styles.description}>
                  <h2>{size.title}:</h2>
                  <p>{size.description}</p>
                  <div className={styles.price}>
                    <strong>R${size.price}</strong>
                    <button
                      onClick={() => addPizzaSize(size.title, size.price)}
                    >
                      Escolher <BiCheck size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <StepProgress active={2} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/ingredients')

  const pizzaSize = data.tamanhos

  return {
    props: { sizes: pizzaSize },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
