import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppLayout from '@c/AppLayout'

import { colors } from '../styles/theme'

export default function Home() {
  return (
    <>
      <AppLayout>
        <div className={styles.container}>
          <Head>
            <title>AskAQuest</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          Aquí se hace login
        </div>
      </AppLayout>
      <style jsx>{`
        img {
          width: 120px;
        }
        .buttons {
          display: flex;
          flex-direction: column;
          margin: 10px;
        }
        div {
          margin-top: 16px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
