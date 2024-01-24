import Image from 'next/image'

import styles from './pizza-day.module.scss'
import { BiCheck } from 'react-icons/bi'

export function PizzaDay() {
  return (
    <div className={styles.container}>
      <h3>Pizza do dia:</h3>
      <div className={styles.wrapper}>
        <div className={styles.wrapperStar}>
          <div className={styles.star}>
            <p>
              <strong>50</strong> pontos
            </p>
          </div>
        </div>
        <Image
          src="/images/pizza-calabresa.jpg"
          alt="Pizza do dia"
          width={300}
          height={300}
        />
        <div className={styles.description}>
          <h4>Pizza Portuguesa</h4>
          <strong>Massa:</strong>
          <p>Portuguesa</p>
          <strong>Ingredientes:</strong>
          <p>
            Molho, mussarela, presunto, ovo, cebola, tomate, azeitona, calabresa{' '}
          </p>

          <div className={styles.price}>
            <p>R$ 35,00</p>
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
