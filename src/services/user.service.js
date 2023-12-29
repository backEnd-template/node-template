const model = require('../models/model.js')

async function createUser(user) {
    try {
        const result = await model.user.create(user)
        return result
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createUser
}