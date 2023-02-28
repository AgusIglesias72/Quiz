import CardComponent from './SmallComponents/CardComponent'
import { mockData } from '../mocks/categoriesData'
import styles from '../styles/Categories.module.css'
import icon from '../../public/icon.svg'

export default function Categories() {
  return (
    <section className={styles.categoriesMain}>
      <div className={styles.categoryWrapper}>
        {mockData.map((item, index) => (
          <CardComponent
            key={index}
            title={item.title}
            category={item.category}
            description={item.description}
            quantity={item.available}
            length={item.length}
            level={item.difficulty}
            icon={icon}
          />
        ))}
      </div>
    </section>
  )
}
