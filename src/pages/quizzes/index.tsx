import type { NextPage } from 'next'
import Categories from '../../Components/Categories'
import PageLayout from '../../Components/PageLayout'

const Quizzes: NextPage = () => {
  return (
    <PageLayout
      title="ExQuizIt | Quizzes"
      description="ExQuizIt is a quiz app that allows you to create and take quizzes."
    >
      <Categories />
    </PageLayout>
  )
}

export default Quizzes
