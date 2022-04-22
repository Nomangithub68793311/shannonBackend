const Info = require('../../database/models/Info')

const saveData = async (req, res) => {
    const { name, email, number, message } = req.body

    try {
        const jane = await Info.create({ name, email, number, message });
        res.status(200).json({ jane })
        console.log(jane)
    }
    catch (e) {
        res.status(400).json({ e: e })
        console.log(e)

    }



}
module.exports = saveData; 