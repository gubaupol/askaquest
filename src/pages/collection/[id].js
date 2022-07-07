import { PATH } from '@s/consts'
import CollectionCover from '@c/Question/CollectionCover'
// import PassingQuestions from '../../components/PassingQuestions'
import { useState } from 'react'
import Nav from '@c/Nav'
import Question from '@c/Question'
//
export default function CollectionPage({
  collection,
  id,
  DBquests,
  questionsMatched,
  userName = 'Anonymous',
}) {
  const [started, setStarted] = useState(false)
  const [actualQuestionIndex, setActualQuestionIndex] = useState(0)
  
  const nextQuestion = () => {
    setActualQuestionIndex(actualQuestionIndex + 1)
  }
  const [results, setResults] = useState([])

  const [actualQuestion, setActualQuestion] = useState(
    questionsMatched[actualQuestionIndex]
  )
  console.log(questionsMatched)
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
      {started && (
        <div>
          <Question
            id={actualQuestion.id}
            title={actualQuestion.title}
            anwers={actualQuestion.answers}
            solution={actualQuestion.solution}
            creator={actualQuestion.creator}
            createdAt={actualQuestion.createdAt}
            likes={actualQuestion.likes}
            incorrect={actualQuestion.incorrect}
            actualQuestionIndex={actualQuestionIndex}
            nextQuestion={nextQuestion}
            results={results}
            setResults={setResults}
          />
        </div>
      )}
      <style jsx>{``}</style>
    </>
  )
}
export async function getServerSideProps(context) {
  const { id } = context.query

  const resCollection = await fetch(`${PATH}/api/singleCollection/${id}`)
  const resQuests = await fetch(`${PATH}/api/quests`)
  const collection = await resCollection.json()
  const DBquests = await resQuests.json()

  // we need to find which questions match width the DBquests.id
  const questionsMatched = collection.questions.map((quest) => {
    const questMatch = DBquests.find((DBquest) => DBquest.id === quest)
    return questMatch
  })

  return { props: { collection, id, DBquests, questionsMatched } }
}
