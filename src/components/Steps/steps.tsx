import styles from './steps.module.scss'

interface StepProgressProps {
  active: number
}

export function StepProgress({ active }: StepProgressProps) {
  return (
    <div>
      <ul className={styles.progressbar}>
        <li className={styles.active}>Massa</li>
        <li className={active > 2 ? styles.active : ''}>Tamanho</li>
        <li className={active > 3 ? styles.active : ''}>Recheio</li>
        <li className={active > 4 ? styles.active : ''}>Finalizar</li>
      </ul>
    </div>
  )
}
