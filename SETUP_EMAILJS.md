# EmailJS Setup Guide

This guide will help you set up email notifications for the contact form. Emails will be well-formatted and sent to **sam29622@gmail.com**.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Get Your Public Key

1. Go to the [Dashboard](https://dashboard.emailjs.com/) 
2. Click on **"Account"** in the left sidebar
3. Copy your **Public Key** (something like `abc123xyz456...`)
4. Replace `YOUR_EMAILJS_PUBLIC_KEY` in `src/lib/emailService.ts` with this key

## Step 3: Create an Email Service

1. In the Dashboard, click **"Email Services"** 
2. Click **"Create a New Service"**
3. Choose **Gmail** (or your preferred email provider)
4. Follow the authentication steps
5. Copy the **Service ID** (e.g., `service_abc123...`)
6. Replace `service_ozma_contact` in `src/lib/emailService.ts` with this Service ID

## Step 4: Create an Email Template

1. In the Dashboard, click **"Email Templates"**
2. Click **"Create New Template"**
3. Name it: `contact_form`
4. Set the **To Email** field to: `{{to_email}}`
5. Use this template content:

```html
Subject: New Contact Form Submission from {{from_name}}

Body (HTML):

<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Inter', Arial, sans-serif; background-color: #f9fafb; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .header { border-bottom: 2px solid #F7803C; padding-bottom: 20px; margin-bottom: 24px; }
        .title { color: #111111; font-size: 24px; font-weight: 900; margin: 0; }
        .section { margin-bottom: 24px; }
        .label { color: #888888; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px; }
        .value { color: #111111; font-size: 16px; font-weight: 500; }
        .message-box { background-color: #f3f4f6; border-left: 4px solid #F7803C; padding: 16px; border-radius: 8px; margin-top: 12px; }
        .message-text { color: #333333; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
        .footer { border-top: 1px solid #e5e7eb; padding-top: 16px; margin-top: 24px; font-size: 12px; color: #888888; text-align: center; }
        .badge { display: inline-block; background-color: #F7803C; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-right: 8px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="title">📬 New Contact Form Submission</h1>
        </div>

        <div class="section">
            <div class="label">From</div>
            <div class="value">{{from_name}}</div>
        </div>

        <div class="section">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:{{from_email}}" style="color: #F7803C; text-decoration: none;">{{from_email}}</a></div>
        </div>

        <div class="section">
            <div class="label">Company</div>
            <div class="value">{{company}}</div>
        </div>

        <div class="section">
            <div class="label">Topic</div>
            <div><span class="badge">{{topic}}</span></div>
        </div>

        <div class="section">
            <div class="label">Message</div>
            <div class="message-box">
                <div class="message-text">{{message}}</div>
            </div>
        </div>

        <div class="footer">
            <p style="margin: 0;">This email was sent from OZMA Contact Form. Reply to {{from_email}} to get back to the sender.</p>
        </div>
    </div>
</body>
</html>
```

7. Copy the **Template ID** (e.g., `template_abc123...`)
8. Replace `template_contact_form` in `src/lib/emailService.ts` with this Template ID

## Step 5: Test the Form

1. Go to your website's contact form
2. Fill in all fields and submit
3. Check sam29622@gmail.com for the formatted email

## Troubleshooting

- **"Failed to initialize emailjs"**: Make sure your Public Key is correct
- **"Service not found"**: Verify your Service ID is correct
- **"Template not found"**: Check your Template ID and ensure it exists
- **"Email not received"**: Check spam folder, verify the Gmail account is connected to EmailJS

## Free Tier Limits

EmailJS free tier allows:
- Up to 200 emails per month
- Unlimited templates
- No credit card required

For higher volumes, upgrade to a paid plan.
