import { breakpoints, colors, fontSizes } from '../../styles/theme'

import Link from 'next/link'
import { addOpacityToColor } from '@sty/utils'
import usePascalCase from '@h/usePascalCase'

export default function Nav({
  actualName,
  actualRoot = 'home',
  path = [],
  actualLink = '/',

  yourName = 'pol',
  yourAvatar = 'https://api.multiavatar.com/pol.png',
}) {
  const linkToProfile = yourName
  yourName = usePascalCase(yourName)

  return (
    <>
      <section>
        <nav>
          <div>
            <Link href={`${'/' + actualRoot}`}>
              <a>{actualRoot}</a>
            </Link>
            {path &&
              path.map((item, index) => (
                <div key={index}>
                  <span>/</span>
                  <Link href={`${'/' + item}`}>
                    <a>{item}</a>
                  </Link>
                </div>
              ))}
            <Link href={`${'/' + actualLink}`}>
              <a>
                <span>/</span>
                {actualName}
              </a>
            </Link>
          </div>
          <Link href={`${'/profile/' + linkToProfile}`}>
            <a>
              <div className="profileLink">
                <div className="nameProfile">
                  <p>
                    <b>{yourName}</b>
                  </p>
                  <p>
                    <small>Your Profile</small>
                  </p>
                </div>
                <img className="avatar" src={yourAvatar} alt={yourName} />
              </div>
            </a>
          </Link>
        </nav>
      </section>
      <style jsx>{`
        section {
          display: flex;
          justify-content: center;
        }
        a {
          padding: 2px 5px;
        }
        a:hover {
          text-decoration: underline;
          background-color: ${addOpacityToColor(colors.primary, 0.2)};
          border-radius: 5px;
        }
        nav {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-content: space-between;
          justify-content: space-between;
          width: 100%;
          height: 10vh;
          position: absolute;
          padding: 20px;
          font-size: ${fontSizes.text};
        }
        span {
          color: ${colors.primary};
          margin: 0 10px;
        }
        div {
          display: flex;
          align-items: center;
          align-content: center;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
        }
        .profileLink {
          display: flex;
        }
        .nameProfile {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
        }
        .nameProfile p {
          margin: 0;
        }
        .avatar {
          width: 49px;
          height: 49px;
          margin-left: 10px;
        }
        //midas de pc
        @media (min-width: ${breakpoints.mobile}) {
          nav {
            max-height: 90vh;
            width: 95%;
          }
        }
      `}</style>
    </>
  )
}
