const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:5173'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Portfolio backend is running!',
    timestamp: new Date().toISOString()
  });
});

// Contact form endpoint
app.post('/contact', async (req, res) => {
  try {
    const { from_name, from_email, subject, message } = req.body;

    // Validate required fields
    if (!from_name || !from_email || !subject || !message) {
      return res.status(400).json({
        error: 'All fields are required: name, email, subject, message'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      return res.status(400).json({
        error: 'Please provide a valid email address'
      });
    }

    console.log('📧 Attempting to send email:', { from_name, from_email, subject });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.YOUR_EMAIL || 'info@hiveofsolutions.com'],
      subject: `🎯 Portfolio Contact: ${subject}`,
      reply_to: from_email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { 
                    font-family: 'Arial', sans-serif; 
                    line-height: 1.6; 
                    color: #333; 
                    max-width: 600px; 
                    margin: 0 auto; 
                    background: #f8fafc;
                }
                .container { 
                    background: white; 
                    border-radius: 12px; 
                    overflow: hidden; 
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
                    margin: 20px;
                }
                .header { 
                    background: linear-gradient(135deg, #10b981, #059669); 
                    color: white; 
                    padding: 30px 20px; 
                    text-align: center; 
                }
                .header h1 { 
                    margin: 0; 
                    font-size: 24px; 
                    font-weight: bold; 
                }
                .content { 
                    padding: 30px; 
                }
                .field { 
                    margin-bottom: 20px; 
                    padding: 16px; 
                    background: #f8fafc; 
                    border-radius: 8px; 
                    border-left: 4px solid #10b981; 
                }
                .label { 
                    font-weight: bold; 
                    color: #10b981; 
                    display: block; 
                    margin-bottom: 8px; 
                    font-size: 14px; 
                }
                .value { 
                    color: #374151; 
                    font-size: 16px; 
                }
                .message-content {
                    background: white; 
                    padding: 20px; 
                    border-radius: 8px; 
                    border: 1px solid #e5e7eb;
                    white-space: pre-line;
                    line-height: 1.8;
                }
                .footer { 
                    text-align: center; 
                    padding: 20px; 
                    color: #6b7280; 
                    font-size: 12px; 
                    background: #f9fafb;
                    border-top: 1px solid #e5e7eb;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🚀 New Portfolio Contact</h1>
                    <p>Someone reached out through your portfolio!</p>
                </div>
                <div class="content">
                    <div class="field">
                        <span class="label">👤 Name</span>
                        <span class="value">${from_name}</span>
                    </div>
                    <div class="field">
                        <span class="label">📧 Email</span>
                        <span class="value">${from_email}</span>
                    </div>
                    <div class="field">
                        <span class="label">🎯 Subject</span>
                        <span class="value">${subject}</span>
                    </div>
                    <div class="field">
                        <span class="label">💬 Message</span>
                        <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                </div>
                <div class="footer">
                    <p>This message was sent from your Hive of Solutions portfolio contact form</p>
                    <p>💼 Don't forget to reply within 24 hours!</p>
                </div>
            </div>
        </body>
        </html>
      `
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return res.status(500).json({ 
        error: 'Failed to send email', 
        details: error.message 
      });
    }

    console.log('✅ Email sent successfully:', data);
    
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!',
      data: data 
    });

  } catch (error) {
    console.error('❌ Server error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found',
    availableEndpoints: {
      'GET /health': 'Health check',
      'POST /contact': 'Submit contact form'
    }
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('💥 Unhandled error:', error);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: error.message 
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/contact`);
  console.log(`🌐 Allowed origins: ${process.env.ALLOWED_ORIGINS || 'http://localhost:5173'}`);
});