import { PATH } from '@s/consts'
import CollectionCover from '@c/Question/CollectionCover'
import { useState, useEffect } from 'react'
import Nav from '@c/Nav'
import Question from '@c/Question'
import Results from '@c/Results/Results'
//
export default function CollectionPage({
  collection,
  id,
  questionsMatched,
  userName = 'Anonymous',
}) {
  const MAX_QUESTION = Number(questionsMatched.length)
  const ARRAY_QUESTIONS = questionsMatched
  const [questionIndex, setQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(
    ARRAY_QUESTIONS[questionIndex]
  )
  const [started, setStarted] = useState(false)
  const [results, setResults] = useState([])

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1)
  }
  useEffect(() => {
    setCurrentQuestion(ARRAY_QUESTIONS[questionIndex])
  }, [questionIndex])
  console.log(questionIndex, ' - ', MAX_QUESTION)

  //
  questionIndex >= MAX_QUESTION &&
    // setShowResults(true) &&
    console.log('results', results)

  return (
    <>
      <Nav path={['collections', id]} actualLink={'collection/' + id} />
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
      {started && questionIndex < MAX_QUESTION && (
        <div>
          <Question
            id={currentQuestion.id}
            title={currentQuestion.title}
            anwers={currentQuestion.answers}
            solution={currentQuestion.solution}
            creator={currentQuestion.creator}
            createdAt={currentQuestion.createdAt}
            likes={currentQuestion.likes}
            incorrect={currentQuestion.incorrect}
            questionIndex={questionIndex}
            nextQuestion={nextQuestion}
            results={results}
            setResults={setResults}
          />
        </div>
      )}
      {questionIndex >= MAX_QUESTION && (
        <Results
          results={results}
          userName={userName}
          title={collection.title}
        />
      )}
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

  return { props: { collection, id, questionsMatched } }
}
