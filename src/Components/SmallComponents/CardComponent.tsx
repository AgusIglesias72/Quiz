import styles from './CardComponent.module.css'
import Image from 'next/image'

export default function CardComponent({ ...props }) {
  const { title, description, quantity, category, length, level, icon } = props

  return (
    <div className={styles.card}>
      <Image
        src={icon}
        alt="Icon for the Quiz"
        width={35}
        height={35}
        className={styles.cardIcon}
      />
      <div className={styles.cardData}>
        <div className={styles.cardHeader}>
          <h1>{title ? title : category}</h1>
          <h5>{title && category}</h5>
          <hr
            style={{
              width: '80%',
              height: '0.5px',
              backgroundColor: '#b8b4b4',
              border: 'none',
            }}
          />
        </div>

        <p>{description}</p>
        <div className={styles.footer}>
          {quantity && <h6>{quantity} ExQuizIts Available </h6>}
          {length && <h6>{length} Questions</h6>}
          {level && <h6>{level}</h6>}
        </div>
      </div>
    </div>
  )
}

// Los tipo Category reciben: category, description, quantity
// Los tipo Quiz reciben: title, description, length, level
