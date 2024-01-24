import styles from './steps.module.scss'

interface StepsProps {
  selected: number
}

export function Steps({ selected }: StepsProps) {
  return (
    <div>
      <ul className={styles.progressBar}>
        <li className={styles.selected}>Massa</li>
        <li className={selected > 2 ? styles.selected : ''}>Tamanho</li>
        <li className={selected > 3 ? styles.selected : ''}>Recheio</li>
        <li className={selected > 4 ? styles.selected : ''}>Finalizar</li>
      </ul>
    </div>
  )
}
