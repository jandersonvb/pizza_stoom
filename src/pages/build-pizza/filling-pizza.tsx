import { StepProgress } from '@/components/Steps'
import { usePizza } from '@/context/PizzaContext'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import { BiCheck } from 'react-icons/bi'
import { api } from '../../services/api'
import styles from './build-pizza.module.scss'

interface FillingProps {
  id: number
  title: string
  price: number
  image: string
  description: string
}

interface FillingProps {
  filling: FillingProps[]
}

export default function Filling({ filling }: FillingProps) {
  const { setImage, setIngredients, sumTotal } = usePizza()

  const router = useRouter()

  function addFillingInPizza(
    ingredients: string,
    price: number,
    image: string,
  ) {
    setIngredients(ingredients)
    sumTotal(price)
    setImage(image)

    router.push('/build-pizza/finish-pizza')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Recheio - StoomPizza</title>
      </Head>
      <div className={styles.content}>
        <h1>Selecione o Recheio da Pizza:</h1>
        <ul>
          {filling.map((item) => (
            <li key={item.id}>
              <div className={styles.modal}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  quality={100}
                />
                <div className={styles.description}>
                  <h2>{item.title}:</h2>
                  <p>{item.description}</p>
                  <div className={styles.price}>
                    <strong>R${item.price}</strong>
                    <button
                      onClick={() =>
                        addFillingInPizza(
                          item.description,
                          item.price,
                          item.image,
                        )
                      }
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
      <StepProgress active={3} />
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/ingredients')

  return {
    props: { filling: data.recheios },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
