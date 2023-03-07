import styles from '../styles/Categories.module.css'
import CardC from './SmallComponents/CardC'

export default function Categories() {
  return (
    <section className={styles.categoriesMain}>
      <div className={styles.categoryWrapper}>
        <CardC />
      </div>
    </section>
  )
}
