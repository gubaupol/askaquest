export default function (req, res) {
  const allCollections = [
    {
      id: '0',
      userId: 0,
      title: 'Quest de ESPAÑA',
      tags: ['ESPAÑA', 'ESPAÑA', 'ESPAÑA'],
      questions: ['0', '1', '2', '3'],
    },
    {
      id: '1',
      userId: 0,
      title: 'Banderas de ESPAÑA',
      tags: ['ESPAÑA', 'ESPAÑA', 'ESPAÑA'],
      questions: ['2', '1', '2', '3'],
    },
    {
      id: '2',
      userId: 0,
      title: 'Mis novias de ESPAÑA',
      tags: ['ESPAÑA', 'ESPAÑA', 'ESPAÑA'],
      questions: ['2', '1', '2', '3'],
    },
  ]
  res.status(200).json(allCollections)
}
