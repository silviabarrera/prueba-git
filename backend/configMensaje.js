const nodemailer = require('nodemailer');

module.exports = (formulario) => {
  const mensaje = `
    <strong>Nombre:</strong> ${formulario.nombre} <br/>
    <strong>E-mail:</strong> ${formulario.email}  <br/>
    <strong>Mensaje:</strong> ${formulario.mensaje}
  `;
  
  let account = nodemailer.createTestAccount((err, account) => {
    // creamos un objeto transporter reusable usando el
    // SMTP transport por defecto
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: account.user,
        pass: account.pass
      }
    });

    let mailOptions = {
      from: `"${formulario.nombre} 👻" <${formulario.email}>`, // email del receptor
      to: 'destinatario', // Cambia esta parte por el destinatario
      subject: formulario.asunto, // asunto del email
      html: mensaje // cuerpo del email en html
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      console.log('Message sent: ' + info.response);
    });
  });
}