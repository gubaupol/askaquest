import CollectionsItem from './CollectionsItem'
import Link from 'next/link'

export default function Collections({
  allCollections = [
    { id: 0, title: 'No conection' },
    { id: 1, title: 'No conection' },
    { id: 2, title: 'No conection' },
  ],
}) {
  return (
    <>
      <section>
        {allCollections.map((collection) => (
          <Link
            key={collection.id}
            href={{
              pathname: '/collection/[id]',
              query: { id: collection.id },
            }}
          >
            <a>
              <CollectionsItem title={collection.title} />
            </a>
          </Link>
        ))}
      </section>

      <style jsx>{`
        section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 2fr));
          margin-top: 10px;

          grid-gap: 15px;
        }
      `}</style>
    </>
  )
}
