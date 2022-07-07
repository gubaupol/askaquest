import { PATH } from '@s/consts'
// import { useRouter } from 'next/router'
import CollectionCover from '@c/Question/CollectionCover'
// import PassingQuestions from '../../components/PassingQuestions'
import { useState } from 'react'
import { Link } from 'next/link'
export default function CollectionPage({ collection, DBquests, userName }) {
  console.log('Collection: ', collection)
  // const [questionArray, setQuestionArray] = useState([])
  const [started, setStarted] = useState(false)
  // const [finnished, setFinnished] = useState(false)
  // const [actualQuestion, setActualQuestion] = useState(0)

  // find the question with the id in the url
  // links of questions id that the collection have
  const { questions } = collection
  console.log('ALL QUESTS ', questions)

  // for (let i = 0; i < questions.length; i++) {
  //   for (let j = 0; j < DBquests.length; j++) {
  //     if (DBquests[j].id === questions[i]) {
  //       choosedQuests.concat(DBquests[j])
  //     }
  //   }
  // }
  // setQuestionArray(choosedQuests)

  return (
    <>
      <Link href={`/home`}>
        <a>Home</a>
      </Link>
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
  return { props: { collection, DBquests, userName } }
}
