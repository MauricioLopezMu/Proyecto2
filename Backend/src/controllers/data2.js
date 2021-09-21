const ctrlData = {  }


ctrlData.getRes = async (req, res) => {
    const data = req.headers['user-agent'];
    res.send({message: data});
};

module.exports = ctrlData