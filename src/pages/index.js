import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useUser, { USER_STATES } from '../hooks/useUser'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Button from '../components/Button'
import { colors } from '../styles/theme'

export default function Home() {
  const user = useUser()
  const router = useRouter()
  // si user es true, te redirecciona
  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleClickGithub = () => {
    alert('a')
  }
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>AskAQuest</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section>
          {user === USER_STATES.NOT_LOGGED && (
            <div className="buttons">
              <Button onClick={handleClickGithub}>Login</Button>
            </div>
          )}
          {user === USER_STATES.NOT_KNOWN && (
            <img src="loading.gif" alt="Loading..." />
          )}
        </section>
      </div>{' '}
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
