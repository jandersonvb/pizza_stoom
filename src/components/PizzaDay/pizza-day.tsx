import Image from 'next/image'

import styles from './pizza-day.module.scss'
import { BiCheck } from 'react-icons/bi'

interface PizzaDayProps {
  pizza: {
    image: string
    ingredients: string
    dough: string
    points: number
    price: number
    title: string
  }
}

export function PizzaDay({ pizza }: PizzaDayProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h3>Pizza do dia:</h3>
      <div className={styles.wrapper}>
        <div className={styles.wrapperStar}>
          <div className={styles.star}>
            <p>
              <strong>{pizza.points}</strong> pontos
            </p>
          </div>
        </div>
        <Image
          src={pizza.image}
          alt=""
          width={300}
          height={300}
          quality={100}
        />
        <div className={styles.description}>
          <h4>{pizza.title}</h4>
          <strong>Massa:</strong>
          <p>{pizza.dough}</p>
          <strong>Ingredientes:</strong>
          <p>{pizza.ingredients}</p>

          <div className={styles.price}>
            <p>
              {pizza.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <button>
              Quero!
              <BiCheck size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
