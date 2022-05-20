const axios = require('axios').default;
const Info = require('../../database/models/Info')

const getData = async (req, res) => {

    try {
        const resposer = await axios.get('http://localhost:8000/add/')
        const hello = resposer.data           // const userObj = JSON.parse(resposer);

        res.status(200).json({ hello })
        // const jane = await Info.find().sort({ createdAt: -1 });
        // res.status(200).json({ jane })
        // console.log(jane)
    }
    catch (e) {
        res.status(400).json({ e: e })
        console.log(e)

    }



}
module.exports = getData; 