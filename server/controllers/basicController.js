const basicController = {}

basicController.get = (req, res) => {
    res.send({
        msg: 'Welcome to the Reddit API Clone'
    })
}

module.exports = basicController