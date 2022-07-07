export default function handler(req, res) {
  const { id } = req.query
  const allCollections = [
    {
      id: '0',
      userId: 0,
      title: 'Quest 1',
      tags: ['tag1', 'tag2', 'tag3'],
      questions: ['0', '1', '2', '3'],
    },
    {
      id: '1',
      userId: 0,
      title: 'Quest 2',
      tags: ['tag1', 'tag2', 'tag3'],
      questions: ['1', '3'],
    },
    {
      id: '2',
      userId: 0,
      title: 'Quest 3',
      tags: ['tag1', 'tag2', 'tag3'],
      questions: ['2', '3'],
    },
  ]
  const quest = allCollections.find((quest) => quest.id === id)
  res.status(200).json(quest)
}
