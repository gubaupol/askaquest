import { colors, fontSizes } from '../../styles/theme'
import { useState } from 'react'
import AppLayout from '@c/AppLayout'

export default function Question({
  id = 0,
  title = 'Your connection did not work, do you know why?',
  anwers = ['yes', 'no', 'maybe'],
  solution = 'yes',
  creator = 'Pol',

  nextQuestion,
  actualQuestionIndex,
  results,
  setResults,
}) {
  const [selectedIndex, setSelectedIndex] = useState(undefined)
  const select = (index) => {
    selectedIndex === index
      ? setSelectedIndex(undefined)
      : setSelectedIndex(index)
  }
  const handleSubmit = () => {
    const yourAnswer = anwers[selectedIndex]
    const isCorrect = yourAnswer === solution

    // concat in results array the index of question, its solution and if you did it right
    setResults([
      ...results,
      {
        index: actualQuestionIndex,
        solution,
        isCorrect,
      },
    ])

    nextQuestion()
  }
  return (
    <>
      <AppLayout>
        <article key={id} className="container">
          <header className="names">
            <small>@{creator}</small>
          </header>
          <div className="content">
            <p className="title">{title}</p>
            <div className="answers">
              {anwers.map((answer, index) => {
                return (
                  <div
                    onClick={() => select(index)}
                    className="answer"
                    style={{
                      backgroundColor:
                        selectedIndex === index
                          ? colors.primary
                          : colors.background,
                    }}
                    key={index}
                    id={`answer${index}`}
                  >
                    <span>{answer}</span>
                  </div>
                )
              })}
            </div>
            <p className="send" onClick={handleSubmit}>
              Send
            </p>
          </div>
        </article>
      </AppLayout>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding: 10px 15px;
        }
        .container:hover {
          background-color: #f5f8fa;
        }

        header {
          display: flex;
          justify-content: space-between;
        }
        .answer {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: ${colors.background};
          margin: 5px 0;
          padding: 10px;
          border-radius: 25px;
        }
        .answer:hover {
          background-color: ${colors.secondary};
        }
        .title {
          font-size: ${fontSizes.subheader};
        }
        .send {
          background: red;
          width: fit-content;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
