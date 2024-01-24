import { Steps } from '@/components/Steps'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { BiCheck } from 'react-icons/bi'
import { api } from '../../services/api'
import styles from './build-pizza.module.scss'

interface FillingProps {
  id: number
  title: string
  price: number
  img: string
  description: string
}

interface FillingProps {
  filling: FillingProps[]
}

export default function Filling({ filling }: FillingProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Selecione o Recheio da Pizza</h1>
          <ul>
            {filling.map((size) => (
              <li key={size.id}>
                <div className={styles.modal}>
                  <Image
                    src={size.img}
                    alt={size.title}
                    width={300}
                    height={300}
                    quality={100}
                  />
                  <div className={styles.description}>
                    <h2>{size.title}</h2>
                    <p>{size.description}</p>
                    <div className={styles.price}>
                      <strong>R${size.price}</strong>
                      <button>
                        Escolher <BiCheck size={30} />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Steps selected={3} />
      </div>
    </>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/ingredients')

  return {
    props: { filling: data.recheios },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
