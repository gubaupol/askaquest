import Head from 'next/head'
import Collections from '@c/Collections/Collections'
import { PATH } from '@s/consts'
import AppLayout from '@c/AppLayout'
import Nav from '@c/Nav'

export default function HomePage({ responseCollection }) {
  // taking current user from localStorage
  const allCollections = responseCollection.message
  const success = responseCollection.success
  console.log(allCollections, success)
  return (
    <>
      <Nav actualRoot="home" />
      <AppLayout>
        <Head>
          <title>Home / AskaQuest </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section>
            <h1>AskaQuest</h1>
          </section>
          <section>
            <p>New Collections: </p>
            <Collections allCollections={allCollections} success={success} />
          </section>
        </main>
      </AppLayout>
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-content: center;
          justify-content: space-between;
          align-items: center;
        }
        .profile {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`${PATH}/api/collections`)

  const responseCollection = await res.json()
  return { props: { responseCollection } }
}
