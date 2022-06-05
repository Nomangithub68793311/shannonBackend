const axios = require('axios').default;
const Erpdata = require('../../database/models/erpData')

const erpGetData = async (req, res) => {

    try {
        // const resposer = await axios.get('http://localhost:8000/add/')
        // const hello = resposer.data           // const userObj = JSON.parse(resposer);

        // res.status(200).json({ hello })
        const erpAll = await Erpdata.find().sort({ createdAt: -1 });
        res.status(200).json({ erpAll })
        // console.log(erpAll)
    }
    catch (e) {
        res.status(400).json({ e: e })
        console.log(e)

    }



}
module.exports = erpGetData; 