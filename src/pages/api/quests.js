import { connectToDatabase } from '../../../libs/mongodb'

export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  // Send all the todos
  const todos = await db.collection('quests').find({}).toArray()
  res.status(200).json(todos)
}
// export default function (req, res) {
//   const allQuests = [
//     {
//       id: '0',
//       userId: 0,
//       title: 'Is this your first question?',
//       answers: ['yes', 'no', 'maybe'],
//       solution: 'yes',
//       creator: 'Pol',
//       createdAt: '2020-01-01',
//       likes: 0,
//       incorrect: 0,
//     },
//     {
//       id: '1',
//       userId: 0,
//       title: 'Is this your second question?',
//       answers: ['yes', 'no', 'maybe'],
//       solution: 'yes',
//       creator: 'Pol',
//       createdAt: '2021-03-06',
//       likes: 5,
//       incorrect: 6,
//     },
//     {
//       id: '2',
//       userId: 0,
//       title: 'Is this your third question?',
//       answers: ['yes', 'no', 'maybe'],
//       solution: 'yes',
//       creator: 'Pol',
//       createdAt: '2020-01-01',
//       likes: 0,
//       incorrect: 0,
//     },
//     {
//       id: '3',
//       userId: 0,
//       title: 'Is this your fourth question?',
//       answers: ['yes', 'no', 'maybe'],
//       solution: 'yes',
//       creator: 'Pol',
//       createdAt: '2021-03-06',
//       likes: 5,
//       incorrect: 6,
//     },
//     {
//       id: '4',
//       userId: 1,
//       title: '¿Donde encontramos un parterre?',
//       answers: [
//         'En un jardín',
//         'En una estación de bomberos',
//         'En la barra de un bar',
//       ],
//       solution: 'En un jardín',
//       creator: 'Pol',
//       createdAt: '2021-03-06',
//       likes: 5,
//       incorrect: 6,
//     },
//     {
//       id: '5',
//       userId: 1,
//       title:
//         '¿Lleva tilde el "solo" con la definición de "Único en su especie" ?',
//       answers: [
//         'Sí, Sólo',
//         'No, nunca',
//         'No, el que lleva tilde es el "solo" de soledad',
//       ],
//       solution: 'No, nunca',
//       creator: 'Pol',
//       createdAt: '2021-03-06',
//       likes: 5,
//       incorrect: 6,
//     },
//   ]

//   res.status(200).json(allQuests)
// }
