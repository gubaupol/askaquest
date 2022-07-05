export default function (req, res) {
  const allQuests = [
    {
      id: '0',
      userId: 0,
      title: 'Is this your first question?',
      anwers: ['yes', 'no', 'maybe'],
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
      anwers: ['yes', 'no', 'maybe'],
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
      anwers: ['yes', 'no', 'maybe'],
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
      anwers: ['yes', 'no', 'maybe'],
      solution: 'yes',
      creator: 'Pol',
      createdAt: '2021-03-06',
      likes: 5,
      incorrect: 6,
    },
  ]
  res.status(200).json(allQuests)
}
