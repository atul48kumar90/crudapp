import mongoose from 'mongoose'


const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected")
    } catch (error) {
        console.log("error while connecting database", error)
    }
}

export default Connection;