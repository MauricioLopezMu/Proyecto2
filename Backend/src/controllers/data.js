const ctrlData = {}
const axios = require('axios');


ctrlData.getRes = async (req, res) => {

    const userAgent = getUser(req.params.id);
    const data = await axios.get('http://localhost:4000/api/data/', {
        headers: {
            'User-Agent': userAgent
        }
    });
    res.send(data.data.message);
};

function getUser(select) {
    let user = '';
    if (select === '1') {
        user = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36'
    } else if (select === '2') {
        user = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36'
    } else if (select === '3') {
        user = 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:70.0) Gecko/20100101 Firefox/70.0'
    } else if (select === '4') {
        user = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4'
    } else if (select === '5') {
        user = 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:70.0) Gecko/20100101 Firefox/70.0'
    } else if (select === '6') {
        user = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 OPR/65.0.3467.48'
    }
    return user
}



module.exports = ctrlData