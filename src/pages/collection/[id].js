import { PATH } from '@s/consts'
import CollectionCover from '@c/Question/CollectionCover'
// import PassingQuestions from '../../components/PassingQuestions'
import { useState } from 'react'
import Nav from '@c/Nav'
//
export default function CollectionPage({ collection, id, DBquests, userName }) {
  const [started, setStarted] = useState(false)

  const { questions } = collection
  console.log('quests to match ', questions)

  return (
    <>
      <Nav path={['collections', id]} actualLink={id} />
      {!started && (
        <CollectionCover
          id={collection.id}
          userId={collection.userId}
          userName={userName}
          title={collection.title}
          tags={collection.tags}
          questions={collection.questions}
          setStarted={setStarted}
        />
      )}
    </>
  )
  // started &&()
}

export async function getServerSideProps(context) {
  const { id } = context.query

  const resCollection = await fetch(`${PATH}/api/singleCollection/${id}`)
  const resQuests = await fetch(`${PATH}/api/quests`)
  const collection = await resCollection.json()
  const DBquests = await resQuests.json()
  const userName = 'Pol Gubau'
  return { props: { collection, id, DBquests, userName } }
}
