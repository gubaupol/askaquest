import Head from 'next/head'
import Collections from '@c/Collections/Collections'
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home / AskaQuest </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>Home😎</section>
      <section>
        <Collections />
      </section>

      <style jsx>{`
        section {
          width: 100%;
          min-height: calc(100% - 49px - 49px);
        }
      `}</style>
    </>
  )
}
