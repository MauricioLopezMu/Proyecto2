const ctrlData = {  }
const axios = require('axios');

ctrlData.getRes = async (req, res) => {
        console.log(req)
        res.send({message: `User Agent: ${req.headers['user-agent']}`});

    
};

module.exports = ctrlData