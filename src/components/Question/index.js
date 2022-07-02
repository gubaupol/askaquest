import { colors, fontSizes } from '../../styles/theme'
import { Heart } from '../../../public/Icons/Heart'
import { useState } from 'react'

export default function Message({
  id = 0,
  title = 'Is this your first question?',
  anwers = ['yes', 'no', 'maybe'],
  solution = 'yes',
  creator = 'Pol',
  createdAt = '2020-01-01',
  likes = 0,
  incorrect = 0,
}) {
  const [selectedIndex, setSelectedIndex] = useState(undefined)
  const select = (index) => {
    selectedIndex === index
      ? setSelectedIndex(undefined)
      : setSelectedIndex(index)
  }
  return (
    <>
      <article key={id} className="container">
        <header>
          <div className="names">
            <small>@{creator}</small>
          </div>
        </header>
        <div className="content">
          <p className="title">{title}</p>
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

        <div className="likesBox">
          <Heart size={25} />
          <span>{likes}</span>
        </div>
      </article>
      <style jsx>{`
        .container {
          border-bottom: solid #ccc 2px;
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
        .title {
          font-size: ${fontSizes.subheader};
        }
      `}</style>
    </>
  )
}
