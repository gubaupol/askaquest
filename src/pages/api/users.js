export default function (req, res) {
  const allUsers = [
    {
      userID: '0',
      userName: 'Pol',
      email: 'gubaupol@gmail.com',
      password: '123456',
      since: '2020-01-01',
      collections: ['0', '1', '2'],
      
      
      
    },
  ]
  res.status(200).json(allUsers)
}
