const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const c = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`database connected with ${c.connection.host}`)
    } catch (error) {
        console.log(error.message)
        console.log('database not connected')
    }
}

module.exports = connectDB