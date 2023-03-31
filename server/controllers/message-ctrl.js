const Message = require('../models/message-model')

createMessage = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a message',
        })
    }

    const messages = new Message(body)

    if (!messages) {
        return res.status(400).json({ success: false, error: err })
    }

    messages
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: messages._id,
                message: 'Message created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Message not created!',
            })
        })
}

updateMessage = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Message.findOne({ _id: req.params.id }, (err, job) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Message not found!',
            })
        }
        
        messages.title = body.title ? body.title : messages.title
        messages.description = body.description ? body.description : messages.description


        messages
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: messages._id,
                    message: 'Message updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Message not updated!',
                })
            })
    })
}

deleteMessage = async (req, res) => {
    await Message.findOneAndDelete({ _id: req.params.id }, (err, job) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!messages) {
            return res
                .status(404)
                .json({ success: false, error: `Message not found` })
        }

        return res.status(200).json({ success: true, data: messages })
    }).catch(err => console.log(err))
}

getMessageById = async (req, res) => {
    await Message.findOne({ _id: req.params.id }, (err, messages) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: messages })
    }).clone().catch(err => console.log(err))
}

getMessages = async (req, res) => {
    await Message.find({}, (err, allMessages) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!allMessages.length) {
            return res
                .status(404)
                .json({ success: false, error: `Message not found` })
        }
        return res.status(200).json({ success: true, data: allMessages })
    }).clone().catch(err => console.log(err))
}

module.exports = {
    createMessage,
    updateMessage,
    deleteMessage,
    getMessages,
    getMessageById
}