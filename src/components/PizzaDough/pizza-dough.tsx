import Image from 'next/image'

import styles from './pizza-dough.module.scss'
import { ImPlay3 } from 'react-icons/im'

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

export function PizzaDough({
  ingredients: { massas } = { massas: [] },
}: PizzaDoughProps) {
  console.log('AS MASSAS:', massas)

  return (
    <div className={styles.container}>
      <h1>Ou monte sua pizza</h1>
      <div className={styles.steps}>
        <p>Selecione sua massa:</p>
        <div>0 / 3</div>
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
                <div className={styles.checked}>
                  <h2>{massa.title}</h2>
                  <input
                    type="radio"
                    id="nova-iorquina"
                    name="dough"
                    value="nova-iorquina"
                  />
                </div>
                <p>{massa.description}</p>
                <span>R$ {massa.price}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button>
        montar meu pedido
        <ImPlay3 size={20} color="#fff" />
      </button>
    </div>
  )
}
