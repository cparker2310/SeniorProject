const Pending = require('../models/pending-model')

createPending = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const pending = new Pending(body)

    if (!pending) {
        return res.status(400).json({ success: false, error: err })
    }

    pending
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: pending._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}


deletePending = async (req, res) => {
    await Pending.findOneAndDelete({ _id: req.params.id }, (err, pending) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!pending) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: pending })
    }).clone().catch(err => console.log(err))
}

getPendingById = async (req, res) => {
    await Pending.findOne({ _id: req.params.id }, (err, pending) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!pending) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: pending })
    }).clone().catch(err => console.log(err))
}

getPendings = async (req, res) => {
    await Pending.find({}, (err, pendings) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!pendings.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: pendings })
    }).clone().catch(err => console.log(err))
}





module.exports = {
    createPending,
    deletePending,
    getPendings,
    getPendingById,
}