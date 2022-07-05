import Question from '@c/Question'
import { useRouter } from 'next/router'

export default function singleQuestionPage({ quests }) {
  const router = useRouter()
  const { id } = router.query

  // find the question with the id in the url
  const quest = quests.find((quest) => quest.id === id)
  return (
    <>
      <Question
        key={quest.id}
        id={quest.id}
        title={quest.title}
        anwers={quest.anwers}
        solution={quest.solution}
        creator={quest.creator}
        createdAt={quest.createdAt}
        likes={quest.likes}
        incorrect={quest.incorrect}
      />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3001/api/quests`)
  const quests = await res.json()
  console.log(quests)
  return { props: { quests } }
}
