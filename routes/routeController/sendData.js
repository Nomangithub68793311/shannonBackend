const axios = require('axios').default;
const Info = require('../../database/models/Info')

const sendData = async (req, res) => {

    try {

        const jane = await Info.find().sort({ createdAt: -1 });
        res.status(200).json({ jane })
        console.log(jane)
    }
    catch (e) {
        res.status(400).json({ e: e })
        console.log(e)

    }



}
module.exports = sendData; 