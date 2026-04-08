# Formspree Setup Guide (Simple 3-minute setup)

This guide sets up automatic email delivery to **sam29622@gmail.com** for all contact form submissions.

## Step 1: Create Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click **"Sign Up"** (free account)
3. Use any email you want for login (doesn't have to be sam29622@gmail.com)

## Step 2: Create a New Form

1. After signup, click **"Create"** or **"New Form"**
2. Enter the email that should receive form submissions: `sam29622@gmail.com`
3. Click **"Create Form"**
4. You'll see your form endpoint like: `https://formspree.io/f/abc123xyz`

## Step 3: Add Your Form Endpoint

1. Copy your Formspree endpoint (the one with `abc123xyz`)
2. Open `src/lib/emailService.ts`
3. Find this line:
   ```
   const response = await fetch("https://formspree.io/f/xyzabc123", {
   ```
4. Replace `xyzabc123` with your actual form ID from Step 2

Example:
```
// BEFORE
const response = await fetch("https://formspree.io/f/xyzabc123", {

// AFTER (if your form ID is abc123xyz)
const response = await fetch("https://formspree.io/f/abc123xyz", {
```

## Step 4: Test

1. Go to your contact form
2. Fill it in and submit
3. You should see a **"Message Sent!"** success message
4. Check sam29622@gmail.com for the email (may take a few seconds)

## What You Get

✅ Zero backend setup needed  
✅ Automatic email delivery  
✅ Spam protection included  
✅ Free tier: unlimited forms & submissions  
✅ Beautiful formatted emails  

## Done!

That's it! The form will now send all submissions to sam29622@gmail.com automatically.

If you need help, visit [Formspree Docs](https://formspree.io/docs/)
