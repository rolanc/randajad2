let nodemailer = require('nodemailer');

module.exports.enviarCorreo = (req, res) => {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rcalvoe@ucenfotec.ac.cr',
      pass: 'Dani123654'
    }
  });

  let mailOptions = {
    from: 'rcalvoe@ucenfotec.ac.cr',
    to: req.body.to,
    subject: req.body.subject,
    text: 'Su registro ha sido exitoso' , text:'Rolo.',
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
      res.json({success:false, msg:error});
    }
    else{
      res.json({success:true});
    }
  });
};