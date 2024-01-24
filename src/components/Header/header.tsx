import Image from 'next/image'

import styles from './header.module.scss'
import Link from 'next/link'
import { usePizza } from '@/context/PizzaContext'

export function Header() {
  const { points } = usePizza()

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={80} height={80} />
        </Link>
        <div>
          <h1>PizzaStoom</h1>
          <h2>é Pizza, sim</h2>
        </div>
      </div>
      <div className={styles.stoompoints}>
        <Image
          src="/images/stoom-points.png"
          alt=""
          width={70}
          height={70}
          quality={100}
        />
        <div>
          <p>Stoom Points</p>
          <strong>{points} Pontos</strong>
        </div>
      </div>
    </header>
  )
}
