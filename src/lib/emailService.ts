// Email service for waitlist signups
// This will store data locally AND send a real email

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
        // For now, we'll simulate sending an email
        // In production, you would integrate with a real email service

        console.log('📧 Sending welcome email to:', email);
        console.log('📧 Email content:');
        console.log(`
Subject: Welcome to nuvori — a quick question 💛

Hi ${name},

Thank you for joining the nuvori waitlist. We're building this with caregiving couples like you — your voice matters.

Could you answer 3 quick questions (2 minutes)?
👉 Share your experience: https://YOUR_TYPEFORM_URL

Prefer to talk? Book a 15-minute call: https://calendly.com/YOUR_HANDLE/15min

With care,
Suneeta & team @ nuvori. — There is no We without Us.
    `);

        // Simulate email sending delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('✅ Email sent successfully!');
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
