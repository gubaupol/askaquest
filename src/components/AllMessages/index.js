import Question from '../Question'

export default function AllMessages({ questions }) {
  return (
    <>
      {questions.map(
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
      )}
    </>
  )
}
