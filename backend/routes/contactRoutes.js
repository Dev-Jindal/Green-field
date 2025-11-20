import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    const contactData = {
      name,
      email,
      phone: phone || '',
      company: company || '',
      subject,
      message,
      submittedAt: new Date(),
    };

    console.log('Contact form submission:', contactData);

    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: contactData,
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process contact form',
      error: error.message,
    });
  }
});

router.get('/', (req, res) => {
  res.json({
    message: 'Contact API endpoint',
    method: 'POST',
    requiredFields: ['name', 'email', 'subject', 'message'],
    optionalFields: ['phone', 'company'],
  });
});

export default router;
