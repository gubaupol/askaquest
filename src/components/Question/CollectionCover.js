import AppLayout from '@c/AppLayout'
import { addOpacityToColor } from '@sty/utils'
import { colors, fontSizes } from '../../styles/theme'

export default function CollectionCover({
  id,
  userId,
  userName = 'Pol Gubau',
  title,
  tags,
  questions,
}) {
  return (
    <>
      <article key={id} className="container">
        {' '}
        <AppLayout width="00px">
          <header className="names">
            <small>@{userName}</small>
          </header>
          <div className="content">
            <h3 className="title">{title}</h3>
            <span>Tags: </span>
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
            <div className="answers">
              This test has <b>{questions.length}</b> questions.
            </div>
            <div className="sendCont">
              <p className="send">Start</p>
            </div>
          </div>
        </AppLayout>
        <AppLayout width="300px">
          <p>Made by {userName}</p>
        </AppLayout>
      </article>

      {/*  */}
      <style jsx>{`
        article {
          width: 100%;
        }
        .container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
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
        .names {
          font-size: ${fontSizes.small};
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
          font-size: ${fontSizes.header};
          margin: 0;
          margin-bottom: 15px;
        }
        .tag {
          margin: 0 5px;
          background-color: ${addOpacityToColor(colors.primary, 0.1)};
          padding: 3px 6px;
          border-radius: 5px;
        }
        .answers {
          margin-top: 15px;
        }
        .sendCont {
          display: flex;
          justify-content: center;
          width: 100%;
          align-items: center;
          flex-wrap: wrap;
          flex-direction: row;
          align-content: center;
        }
        .send {
          display: flex;
          background-color: ${addOpacityToColor(colors.primary, 0.4)};
          width: fit-content;
          font-size: ${fontSizes.subheader};
          padding: 5px 10px;
        }
      `}</style>
    </>
  )
}
