const ctrlData = {  }
const axios = require('axios');
const userAgent = '';


ctrlData.getRes = async (req, res) => {
    const data = req.headers['user-agent'];
    res.send({message: data});
};

module.exports = ctrlData