import { usePizza } from '@/context/PizzaContext'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from './finish-pizza.module.scss'
import { StepProgress } from '@/components/Steps'

export default function FinishPizza() {
  const { pizza, total, imagePizza, sumPoints, clearProperties } = usePizza()

  const router = useRouter()

  function handleFinishPizza() {
    if (!pizza.points) {
      sumPoints(40)
    } else {
      sumPoints(pizza.points)
    }

    clearProperties()

    router.push('/')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Finalizar Pedido - StoomPizza</title>
      </Head>
      <div className={styles.content}>
        <div className={styles.modal}>
          <Image
            src={imagePizza}
            alt=""
            width={300}
            height={300}
            quality={100}
          />
          <div className={styles.description}>
            <h3>Massa:</h3>
            <p>{pizza.dough}</p>
            <h3>Tamanho:</h3>
            <p>{pizza.size}</p>
            <h3>Ingredientes:</h3>
            <p>{pizza.ingredients}</p>
            <h3>Total:</h3>
            <strong>
              {total.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </strong>
            <button onClick={handleFinishPizza}> Finalizar Pedido</button>
          </div>
        </div>
        <p>
          Você ganhara <strong>{pizza.points ? pizza.points : 40}</strong>{' '}
          pontos por finalizar esse pedido.
        </p>
      </div>
      <StepProgress active={5} />
    </div>
  )
}
