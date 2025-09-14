# EmailJS Setup Guide for Nuvori Waitlist

## Quick Setup (5 minutes)

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (100 emails/month free)

### 2. Add Email Service
- In your EmailJS dashboard, go to **"Email Services"**
- Click **"Add New Service"**
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions for your provider
- **Copy your Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
- Go to **"Email Templates"**
- Click **"Create New Template"**
- Use this template content:

```
Subject: Welcome to nuvori — a quick question 💛

Hi {{to_name}},

Thank you for joining the nuvori waitlist. We're building this with caregiving couples like you — your voice matters.

Could you answer 3 quick questions (2 minutes)?
👉 Share your experience: https://YOUR_TYPEFORM_URL

Prefer to talk? Book a 15-minute call: https://calendly.com/YOUR_HANDLE/15min

With care,
{{from_name}} — There is no We without Us.
```

- **Copy your Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
- Go to **"Account"** → **"General"**
- **Copy your Public Key** (e.g., `abc123def456`)

### 5. Update Configuration
- Open `src/lib/emailConfig.ts`
- Replace these values:
  ```typescript
  serviceId: 'YOUR_SERVICE_ID_HERE',
  templateId: 'YOUR_TEMPLATE_ID_HERE', 
  publicKey: 'YOUR_PUBLIC_KEY_HERE',
  ```

### 6. Test
- Submit the waitlist form
- Check your email for the welcome message!

## Current Status
✅ **Data Storage**: Working (saves to local storage)  
⚠️ **Email Sending**: Needs EmailJS setup (currently logs to console)  
✅ **Form Validation**: Working  
✅ **Success States**: Working  

## Fallback Method
If you don't want to set up EmailJS right now, the form will:
1. ✅ Store user data locally
2. ✅ Show success message
3. 📧 Log email content to console for manual sending

You can check the console (F12) to see the email content and send manually.
