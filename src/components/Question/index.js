import { colors, fontSizes } from '../../styles/theme'
import { useState } from 'react'

export default function Question({
  id = 0,
  title = 'Your connection did not work, do you know why?',
  anwers = ['yes', 'no', 'maybe'],
  solution = 'yes',
  creator = 'Pol',
  createdAt = '2020-01-01',
  likes = 0,
  incorrect = 0,
  changeQuestion,
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
    setResults((results) => [...results, isCorrect])
    console.log(yourAnswer, isCorrect)

    changeQuestion()
  }
  return (
    <>
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
          <p onClick={handleSubmit}>Send</p>
        </div>
      </article>
      <style jsx>{`
        .container {
          border-bottom: solid #ccc 5px;
          display: flex;
          flex-direction: column;
          padding: 10px 15px;
        }
        .container:hover {
          background-color: #f5f8fa;
          cursor: pointer;
        }
        header {
          display: flex;
          justify-content: space-between;
        }
        .answer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: ${colors.background};
          margin: 5px 0;
          padding: 10px;
          border-radius: 25px;
          text-align: center;
        }
        .answer:hover {
          background-color: ${colors.secondary};
        }
        .title {
          font-size: ${fontSizes.subheader};
        }
      `}</style>
    </>
  )
}
