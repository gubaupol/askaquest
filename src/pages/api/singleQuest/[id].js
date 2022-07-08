export default function handler(req, res) {
  const { id } = req.query
  const allQuests = [
    {
      id: '0',
      userId: 0,
      title: 'Is this your first question?',
      answers: ['yes', 'no', 'maybe'],
      solution: 'yes',
      creator: 'Pol',
      createdAt: '2020-01-01',
      likes: 0,
      incorrect: 0,
    },
    {
      id: '1',
      userId: 0,
      title: 'Is this your second question?',
      answers: ['yes', 'no', 'maybe'],
      solution: 'yes',
      creator: 'Pol',
      createdAt: '2021-03-06',
      likes: 5,
      incorrect: 6,
    },
    {
      id: '2',
      userId: 0,
      title: 'Is this your third question?',
      answers: ['yes', 'no', 'maybe'],
      solution: 'yes',
      creator: 'Pol',
      createdAt: '2020-01-01',
      likes: 0,
      incorrect: 0,
    },
    {
      id: '3',
      userId: 0,
      title: 'Is this your fourth question?',
      answers: ['yes', 'no', 'maybe'],
      solution: 'yes',
      creator: 'Pol',
      createdAt: '2021-03-06',
      likes: 5,
      incorrect: 6,
    },
  ]
  const quest = allQuests.find((quest) => quest.id === id)
  res.status(200).json(quest)
}
