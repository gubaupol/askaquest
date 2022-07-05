import { useState } from 'react'
import Question from '../Question'

export default function PassingQuestions({ questions }) {
  const [qn, setQuestionNumber] = useState(0)
  const [results, setResults] = useState([])

  const next = () => {
    if (qn < questions.length - 1) setQuestionNumber(qn + 1)
    if (qn === questions.length - 1) {
      // when finish

      console.log(results)
    }
  }
  return (
    <>
      <Question
        key={questions[qn].id}
        id={questions[qn].id}
        title={questions[qn].title}
        anwers={questions[qn].anwers}
        solution={questions[qn].solution}
        creator={questions[qn].creator}
        createdAt={questions[qn].createdAt}
        likes={questions[qn].likes}
        incorrect={questions[qn].incorrect}
        changeQuestion={next}
        setResults={setResults}
      />
      {/* {questions.map(
        ({
          id = 0,
          title = 'Is this your first question?',
          anwers = ['yes', 'no', 'maybe'],
          solution = 'yes',
          creator = 'Pol',
          createdAt = '2020-01-01',
          likes = 0,
          incorrect = 0,
        }) => {
          return (
            <Question
              key={id}
              id={id}
              title={title}
              anwers={anwers}
              solution={solution}
              creator={creator}
              createdAt={createdAt}
              likes={likes}
              incorrect={incorrect}
            />
          )
        }
      )} */}
    </>
  )
}
