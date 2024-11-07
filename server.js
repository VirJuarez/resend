const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();
const {getEmailTemplate} = require("./getTemplate")

const app = express();

app.use(cors());
app.use(express.json()); 

// Inicializar Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Ruta para enviar email
app.post('/api/send-email', async (req, res) => {
  try {
    const html = await getEmailTemplate('template',{
        name: "Anthony",
        form_url: process.env.FRONTEND_URL.toString()
    }); 

    const data = await resend.emails.send({
      from: 'Customer Scoops <customerscoops@resend.dev>',
      to: 'virginia.juarez1996@gmail.com',
      subject: 'Encuesta de opinión',
      html: html
    });

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});