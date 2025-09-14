// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below

export const EMAIL_CONFIG = {
    // Replace these with your actual EmailJS credentials
    serviceId: 'service_nuvori', // Your EmailJS service ID
    templateId: 'template_welcome', // Your EmailJS template ID
    publicKey: 'YOUR_PUBLIC_KEY', // Your EmailJS public key

    // Email template variables
    templateParams: {
        to_name: '{{to_name}}',
        to_email: '{{to_email}}',
        from_name: '{{from_name}}',
        message: '{{message}}'
    }
};

// Instructions for setting up EmailJS:
export const EMAILJS_SETUP_INSTRUCTIONS = `
1. Go to https://www.emailjs.com/ and create a free account
2. In your EmailJS dashboard:
   - Go to "Email Services" and add a service (Gmail, Outlook, etc.)
   - Go to "Email Templates" and create a new template
   - Go to "Account" → "General" to get your Public Key
3. Update the values in src/lib/emailConfig.ts
4. Your template should include these variables:
   - {{to_name}} - recipient's name
   - {{to_email}} - recipient's email
   - {{from_name}} - sender name
   - {{message}} - email content
`;
