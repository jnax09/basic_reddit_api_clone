const db = require('../../models')

const postController = {}

postController.post = async (req, res) => {
    const {
        title,
        link,
        text,
        userId
    } = req.body

    const newPost = new db.Post({
        title,
        link,
        text,
        _creator: userId
    })

    // TODO: Validation: Either text or link not both

    try {
        const post = await newPost.save()
        res.status(200).send(post)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

postController.getAll = async (req, res) => {
    try {
        const options = [{
                path: '_creator',
                select: 'username -_id createdAt'
            },
            {
                path: '_comments'
            }
        ]

        const posts = await db.Post.find({})
            .populate(options)

        return res.status(200).send(posts)
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}


module.exports = postController