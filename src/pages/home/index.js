import Head from 'next/head'
import DownBar from '../../components/DownBar'
import AllMessages from '../../components/AllMessages'
import { questions } from '../../service/questions'
export default function HomePage() {
  console.log(questions)
  return (
    <>
      <Head>
        <title>Home / AskaQuest </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>{<AllMessages questions={questions} />}</section>

      <DownBar />

      <style jsx>{`
        section {
          width: 100%;
          min-height: calc(100% - 49px - 49px);
        }
      `}</style>
    </>
  )
}
