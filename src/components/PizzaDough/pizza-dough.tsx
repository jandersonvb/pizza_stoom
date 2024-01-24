import Image from 'next/image'

import styles from './pizza-dough.module.scss'
import { ImPlay3 } from 'react-icons/im'
import { usePizza } from '@/context/PizzaContext'
import { useRouter } from 'next/dist/client/router'

interface Massas {
  id: number
  title: string
  price: number
  description: string
  image: string
}

interface PizzaDoughProps {
  ingredients: {
    massas: Massas[]
  }
}

export function PizzaDough({ ingredients: { massas } }: PizzaDoughProps) {
  const { setMassa, sumTotal } = usePizza()

  const router = useRouter()

  function addDoughInPIzza(dough: string, price: number) {
    setMassa(dough)
    sumTotal(price)

    router.push('/build-pizza/size-pizza')
  }

  return (
    <div className={styles.container}>
      <h1>Ou monte sua pizza</h1>
      <div className={styles.steps}>
        <p>Selecione sua massa:</p>
        <div>1 / 4</div>
      </div>
      <ul>
        {massas.map((massa) => (
          <li key={massa.id}>
            <div className={styles.pizzaDough}>
              <Image
                src={massa.image}
                alt=""
                width={300}
                height={300}
                quality={100}
              />
              <div className={styles.pizzaDoughDescription}>
                <h2> {massa.title}</h2>
                <p>{massa.description}</p>
                <div className={styles.price}>
                  <strong>
                    {massa.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </strong>
                  <button
                    onClick={() => addDoughInPIzza(massa.title, massa.price)}
                  >
                    montar meu pedido
                    <ImPlay3 size={20} color="#fff" />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
