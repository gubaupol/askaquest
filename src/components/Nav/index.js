import { breakpoints, colors, fontSizes } from '../../styles/theme'
import Link from 'next/link'

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
                <>
                  <span>/</span>
                  <Link key={index} href={`${'/' + item}`}>
                    <a>{item}</a>
                  </Link>
                </>
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
