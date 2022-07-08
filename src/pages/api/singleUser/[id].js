export default function (req, res) {
  const { id } = req.query
  // id is in fact username to show a prettier url, so let's change it
  const userName = id
  const singleUser = [
    {
      id: '0',
      userName: 'pol',
      email: 'gubaupol@gmail.com',
      avatar: 'https://api.multiavatar.com/pol.png',
      password: '123456',
      since: '2020-01-01',
      collections: ['0', '1', '3'],
    },
    {
      id: '1',
      userName: 'anna',
      email: 'annacampsromero@gmail.com',
      avatar: 'https://api.multiavatar.com/anna.png',
      password: '123456',
      since: '2020-01-01',
      collections: ['0', '3'],
    },
    {
      id: '2',
      userName: 'marcos',
      email: 'marcos@gmail.com',
      avatar: 'https://api.multiavatar.com/marcos.png',
      password: '123456',
      since: '2020-01-01',
      collections: ['0', '3'],
    },
    {
      id: '3',
      userName: 'marc',
      email: 'marc@gmail.com',
      avatar: 'https://api.multiavatar.com/marc.png',
      password: '123456',
      since: '2020-01-01',
      collections: ['0', '3'],
    },
  ]
  let quest = singleUser.find((quest) => quest.userName === userName) // si no coge el nombre de usuario, buscará el id
  if (!quest) quest = singleUser.find((quest) => quest.id === userName)
  res.status(200).json(quest)
}
