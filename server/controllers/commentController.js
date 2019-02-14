const db = require('./../../models')

const commentController = {}

commentController.post = async (req, res) => {
    const {
        userId,
        text,
        postId
    } = req.body

    //TODO: Validation

    const newComment = new db.Comment({
        text,
        _creator: userId,
        _post: postId
    })

    try {
        const comment = await newComment.save()

        const post = await db.Post.findOneAndUpdate({
            _id: postId
        }, {
            $push: {
                '_comments': comment._id
            }
        }, {
            new: true
        })

        res.status(200).send({
            comment,
            post
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

module.exports = commentController