import { breakpoints, colors, fontSizes } from '../../styles/theme'
import Link from 'next/link'
import { addOpacityToColor } from '@sty/utils'

export default function Nav({
  actualRoot = 'home',
  path = [],
  actualLink = '/',
}) {
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
          </div>
          <div>Profile</div>
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
        }
        .avatar {
          margin-left: 15px;
          border-radius: 50%;
          width: 49px;
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
