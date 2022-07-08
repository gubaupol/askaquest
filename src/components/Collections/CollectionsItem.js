import { colors } from '@sty/theme'
import { addOpacityToColor } from '@sty/utils'

export default function CollectionsItem({ title, length }) {
  return (
    <>
      <section>
        <div>
          <h3>{title}</h3>
          <p>This quest has {length} questions.</p>
        </div>
      </section>

      <style jsx>{`
        section {
          padding: 0 15px;
          border: 1px solid ${colors.primary};
          border-radius: 10px;
          background-color: ${addOpacityToColor(colors.primary, 0.1)};
        }
        section:hover {
          background-color: ${addOpacityToColor(colors.primary, 0.3)};
        }
      `}</style>
    </>
  )
}
