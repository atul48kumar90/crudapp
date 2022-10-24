import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
})

//const user = mongoose.model('user', userSchema);
// autoIncrement.initialize(mongoose.connction)
// userSchema.plugin(autoIncrement.plugin, 'user')

const user = mongoose.model('user', userSchema);

export default user;