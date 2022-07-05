export default function Collections({ collections }) {
  console.log(collections)
  return (
    <>
      <section>{}</section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3001/api/collections`)
  const collections = await res.json()
  console.log(collections)
  return { props: { collections } }
}
