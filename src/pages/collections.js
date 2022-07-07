import Head from 'next/head'
import Collections from '@c/Collections/Collections'
import { PATH } from '@s/consts'
import AppLayout from '@c/AppLayout'
import Nav from '@c/Nav'

export default function collections({ allCollections }) {
  return (
    <>
      <Nav path={['collections']} />
      <AppLayout>
        <Head>
          <title>Home / AskaQuest </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section>
            <p>All Collections: </p>
            <Collections allCollections={allCollections} />
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
  const allCollections = await res.json()
  return { props: { allCollections } }
}
