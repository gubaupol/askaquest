import { PATH } from '@s/consts'
import { useRouter } from 'next/router'
import CollectionCover from '@c/Question/CollectionCover'
export default function CollectionPage({ collections, userName }) {
  const router = useRouter()
  const { id } = router.query

  // find the question with the id in the url
  const collection = collections.find((quest) => quest.id === id)
  return (
    <>
      <CollectionCover
        id={collection.id}
        userId={collection.userId}
        userName={userName}
        title={collection.title}
        tags={collection.tags}
        questions={collection.questions}
      />
    </>
  )
}

export async function getServerSideProps() {
  const resCollections = await fetch(`${PATH}/api/collections`)
  const collections = await resCollections.json()
  const userName = 'Pol Gubau'
  return { props: { collections, userName } }
}
