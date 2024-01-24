import { Steps } from '@/components/Steps'
import Image from 'next/image'
import styles from './finish-pizza.module.scss'

export function FinishPizza() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.modal}>
            <Image
              src="/images/pizza-calabresa.png"
              alt="Pizza"
              width={300}
              height={300}
              quality={100}
            />
            <div className={styles.description}>
              <h3>Massa</h3>
              <p>Siciliana</p>
              <h3>Tamanho</h3>
              <p>Grande</p>
              <h3>Ingredientes</h3>
              <p>Mussarela</p>
              <h3>Total</h3>
              <strong>R$30,00</strong>
              <button> Finalizar Pedido</button>
            </div>
          </div>
        </div>
        <Steps selected={4} />
      </div>
    </>
  )
}
