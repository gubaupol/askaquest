const mongoose = require('mongoose')
const connectingString = process.env.MONGO_DB_URI

// conexion a mongo

mongoose
  .connect(connectingString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('conectado a mongo')
  })
  .catch((err) => {
    console.error(err)
  })
