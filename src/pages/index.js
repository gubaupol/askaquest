import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppLayout from '@c/AppLayout'
import { useRouter } from 'next/router'
import { PATH } from '@s/consts'
import { colors } from '../styles/theme'
import { useState, useEffect } from 'react'

export default function Index({ users }) {
  const router = useRouter()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [userEntered, setUserEntered] = useState(false)
  const [failedLogIn, setFailedLogIn] = useState(false)
  const allUsers = users.message
  const success = users.success
  console.log(allUsers)
  useEffect(() => {
    // taking user from localStorage, if it exists, lets go to home page
    const user = localStorage.getItem('user')
    if (user) {
      router.push('/home')
    }
  }, [userEntered])
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (success) {
      try {
        const user = allUsers.find(
          (user) => user.user === userName && user.password === password
        )
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          setUserEntered(true)
          router.push('/home')
        } else {
          setFailedLogIn(true)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      console.error(success)
    }
  }

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
            <section className="singupSection">
              {failedLogIn && (
                <p className="error">
                  Ouppsss... maybe that wasn&apos;t your password
                </p>
              )}
              <form>
                <input
                  type="text"
                  placeholder="Username"
                  autoComplete="username"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </form>
              <button onClick={handleSubmit}>Login</button>
            </section>
            <section className="buttonsContainer">
              <button
                onClick={(e) => {
                  router.push('/singup')
                }}
              >
                Create an account
              </button>
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
export async function getServerSideProps() {
  const res = await fetch(`${PATH}/api/users`)
  const users = await res.json()
  return { props: { users } }
}
