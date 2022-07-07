import Head from 'next/head'
import Collections from '@c/Collections/Collections'
import { PATH } from '@s/consts'
import AppLayout from '@c/AppLayout'

export default function HomePage({ allCollections }) {
  const userName = 'Pol'
  return (
    <>
      <AppLayout>
        <Head>
          <title>Home / AskaQuest </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section>
            <nav>
              <h3>Home😎</h3>
              <div className="profile">
                <span>{userName}</span>
                <img
                  src="https://i.pravatar.cc/150"
                  alt="profile"
                  className="avatar"
                />
              </div>
            </nav>
          </section>
          <section>
            <p>New Collections: </p>
            <Collections allCollections={allCollections} userName={userName} />
          </section>
        </main>
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
          .avatar {
            margin-left: 15px;
            border-radius: 50%;
            width: 49px;
          }
        `}</style>
      </AppLayout>
    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`${PATH}/api/collections`)
  const allCollections = await res.json()
  return { props: { allCollections } }
}
