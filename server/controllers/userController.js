const db = require('./../../models')

const userController = {}

userController.post = async (req, res) => {
    const {
        username,
        password
    } = req.body

    // TODO: Validation

    const newUser = new db.User({
        username,
        password
    })

    try {
        const user = await newUser.save()
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }

}

module.exports = userController