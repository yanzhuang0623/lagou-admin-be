const positionModel = require('../models/positionModel');

module.exports = {
    save: async(req, res, next) => {
        const msg = await positionModel.save(req.body)
        if(msg) {
            res.send({
                code: 200,
                data: 'success'
            })
        } else {
            res.send({
                code: 400,
                data: 'failed'
            })
        }
    }
}