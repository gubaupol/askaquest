const { connectToDatabase } = require('../../../../libs/mongodb')
const ObjectId = require('mongodb').ObjectId

export default async function handler(req, res) {
  const { id } = req.query

  // converting id to a ObjectId

  try {
    const { db } = await connectToDatabase()
    const collections = await db
      .collection('collections')

      .find({ _id: ObjectId(id) })
      .toArray()
    return res.json({
      message: JSON.parse(JSON.stringify(collections)),
      success: true,
    })
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}
