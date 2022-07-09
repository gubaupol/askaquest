import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppLayout from '@c/AppLayout'

import { colors } from '../styles/theme'
import { connectToDatabase } from 'libs/mongodb'

export default function Home({ isConnected }) {
  console.log(isConnected)
  return (
    <>
      <Head>
        <title>AskAQuest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div className={styles.container}>
          <section>
            <h1>AskAQuest</h1>
            <section className="buttonsContainer">
              <button>Login</button>
              <button>Create an account</button>
            </section>
          </section>
        </div>
      </AppLayout>
      <style jsx>{`
        .buttonsContainer {
          display: flex;
          flex-direction: row;
          margin: 10px;
        }
        button {
          margin: 5px 2px;
          padding: 3px 6px;
        }

        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }
      `}</style>
    </>
  )
}
export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },
  }
}
