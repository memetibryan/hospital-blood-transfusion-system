const mongoose = require ('mongoose');

const userSchema = mongoose.Schema ({
    name: string,
    location: string,
    tel: number
})

module.exports = mongoose.model('patients', userSchema)