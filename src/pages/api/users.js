export default function (req, res) {
  const allUsers =  [
    {
      id: '0',
      userName: 'pol',
      email: 'gubaupol@gmail.com',
      avatar: 'https://api.multiavatar.com/Pol.png',
      password: '123456',
      since: '2020-01-01',
      collections: ['0', '1', '3'],
    },
    {
      id: '1',
      userName: 'anna',
      email: 'annacampsromero@gmail.com',
      avatar: 'https://api.multiavatar.com/Anna.png',
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
  res.status(200).json(allUsers)
}
