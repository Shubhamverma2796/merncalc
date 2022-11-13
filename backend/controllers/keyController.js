const Keys = require('../models/keyModel');

const createKeys = async (req,res) => {
    try {
        const data = await Keys.find();
        res.send(data);
    } catch(err) {
        res.status(400);
        console.log(err);
    }
   
}

module.exports = { createKeys };

