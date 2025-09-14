// Email service for waitlist signups
// This will store data locally AND send a real email using EmailJS

import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from './emailConfig';

interface WaitlistEntry {
    id: string;
    name: string;
    email: string;
    source: string;
    timestamp: string;
}

class EmailService {
    private storageKey = 'nuvori_waitlist_entries';

    async addToWaitlist(name: string, email: string, source: string): Promise<{ success: boolean; message: string }> {
        try {
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return { success: false, message: 'Please enter a valid email address' };
            }

            // Check if email already exists
            const existingEntries = this.getStoredEntries();
            const emailExists = existingEntries.some(entry =>
                entry.email.toLowerCase() === email.toLowerCase()
            );

            if (emailExists) {
                return { success: false, message: 'This email is already on our waitlist!' };
            }

            // Create new entry
            const newEntry: WaitlistEntry = {
                id: Date.now().toString(),
                name: name.trim(),
                email: email.toLowerCase().trim(),
                source: source,
                timestamp: new Date().toISOString()
            };

            // Store entry locally
            const updatedEntries = [...existingEntries, newEntry];
            localStorage.setItem(this.storageKey, JSON.stringify(updatedEntries));

            // Send email using a simple approach
            await this.sendWelcomeEmail(name, email);

            console.log('New waitlist entry:', newEntry);
            console.log('Total entries:', updatedEntries.length);

            return {
                success: true,
                message: 'Successfully added to waitlist! Check your email for confirmation.'
            };

        } catch (error) {
            console.error('Error adding to waitlist:', error);
            return { success: false, message: 'Something went wrong. Please try again.' };
        }
    }

    private async sendWelcomeEmail(name: string, email: string): Promise<void> {
        try {
            // Check if EmailJS is properly configured
            if (EMAIL_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
                console.log('⚠️ EmailJS not configured yet - using fallback method');
                this.logEmailForManualSending(name, email);
                return;
            }

            // Template parameters
            const templateParams = {
                to_name: name,
                to_email: email,
                from_name: 'Suneeta & team @ nuvori',
                message: `Hi ${name},

Thank you for joining the nuvori waitlist. We're building this with caregiving couples like you — your voice matters.

Could you answer 3 quick questions (2 minutes)?
👉 Share your experience: https://YOUR_TYPEFORM_URL

Prefer to talk? Book a 15-minute call: https://calendly.com/YOUR_HANDLE/15min

With care,
Suneeta & team @ nuvori. — There is no We without Us.`
            };

            console.log('📧 Sending welcome email to:', email);

            // Send email using EmailJS
            const result = await emailjs.send(
                EMAIL_CONFIG.serviceId,
                EMAIL_CONFIG.templateId,
                templateParams,
                EMAIL_CONFIG.publicKey
            );

            console.log('✅ Email sent successfully!', result);

        } catch (error) {
            console.error('❌ Error sending email:', error);
            this.logEmailForManualSending(name, email);
        }
    }

    private logEmailForManualSending(name: string, email: string): void {
        console.log('📧 EmailJS not configured - Email content for manual sending:');
        console.log('='.repeat(60));
        console.log(`TO: ${email}`);
        console.log(`SUBJECT: Welcome to nuvori — a quick question 💛`);
        console.log('');
        console.log(`Hi ${name},`);
        console.log('');
        console.log('Thank you for joining the nuvori waitlist. We\'re building this with caregiving couples like you — your voice matters.');
        console.log('');
        console.log('Could you answer 3 quick questions (2 minutes)?');
        console.log('👉 Share your experience: https://YOUR_TYPEFORM_URL');
        console.log('');
        console.log('Prefer to talk? Book a 15-minute call: https://calendly.com/YOUR_HANDLE/15min');
        console.log('');
        console.log('With care,');
        console.log('Suneeta & team @ nuvori. — There is no We without Us.');
        console.log('='.repeat(60));
    }

    private getStoredEntries(): WaitlistEntry[] {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    }

    // Method to export all entries (for admin use)
    exportEntries(): WaitlistEntry[] {
        return this.getStoredEntries();
    }

    // Method to get entry count
    getEntryCount(): number {
        return this.getStoredEntries().length;
    }
}

export const emailService = new EmailService();
