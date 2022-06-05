const nodemailer = require("nodemailer");
const sendSms = require('../../utils/sendemail')
const Erpdata = require('../../database/models/erpData')





const erpSaveData = async (req, res) => {
    const { Name, Phone, Website, Company, Subject, Mobile, Country,
        Address, Email, Work, City, Message } = req.body

    try {
        const erpdata = await Erpdata.create({
            Name, Phone, Website, Company,
            Subject, Mobile, Country, Address,
            Email, Work, City, Message
        });
        res.status(200).json({ erpdata })
        sendSms(Email, Name)
        console.log(erpdata)
    }
    catch (e) {
        res.status(400).json({ e: e })
        console.log(e)

    }



}
module.exports = erpSaveData;


