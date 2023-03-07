import type { NextPage } from 'next'
import Categories from '../../Components/Categories'
import PageLayout from '../../Components/PageLayout'

import { useSession, signIn, signOut } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../pages/api/auth/[...nextauth]'
import TopExquizzers from '../../Components/SmallComponents/TopExquizzers'

const Quizzes: NextPage = () => {
  const { data: session } = useSession()

  return (
    <PageLayout
      title="ExQuizIt | Quizzes"
      description="ExQuizIt is a quiz app that allows you to create and take quizzes."
    >
      <Categories />
      <TopExquizzers />
    </PageLayout>
  )
}

export default Quizzes

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
