const path = require('path')

async function getIndex(req,res) {

    res.sendFile(path.join(__dirname , '../public/index.html'));
}


module.exports = {getIndex};
