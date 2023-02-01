import { useSession, signIn, signOut } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import PageLayout from '../../Components/PageLayout'

export default function Profile() {
  const { data: session } = useSession()

  return (
    <PageLayout title="ExQuizIt - Profile" description="Profile page">
      <div>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user?.email} <br />
            Signed in as {session.user?.name} <br />
            Signed in as {session.user?.image} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
      </div>
    </PageLayout>
  )
}

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
