const positionModel = require('../models/positionModel');

module.exports = {
    save: async(req, res, next) => {
        const msg = await positionModel.save(req.body)
        if(msg) {
            res.send({
                ret: true,
                data: 'success'
            })
        } else {
            res.send({
                ret: false,
                data: 'failed'
            })
        }
    },

    list: async (req, res, next) => {
        console.log(req.body)
        const msg = await positionModel.list(req.body)
        if(msg) {
            res.send({
                ret: true,
                data: msg
            })
        } else {
            res.send({
                ret: false,
                data: 'failed'
            })
        }
    }
}