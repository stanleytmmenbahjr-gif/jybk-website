# Email Setup Guide - Frontend Only

Your booking form is now **frontend-only** using **EmailJS** for email handling. No backend server needed!

## Setup Steps

### 1. Create Free EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com)
- Sign up with your email
- Create a new account (free tier available)

### 2. Get Your Keys
- **Public Key**: In Dashboard → Account → Public Key
- **Service ID**: In Dashboard → Email Services → Copy the Service ID
- **Template ID**: In Dashboard → Email Templates → Copy the Template ID

### 3. Update Your Booking Form
In `src/components/booking.vue`, replace the placeholder keys:

```javascript
onMounted(() => {
  emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // Add your public key here
});

const submitForm = async () => {
  // ... in the emailjs.send() call:
  await emailjs.send(
    'YOUR_SERVICE_ID',        // Add your service ID
    'YOUR_TEMPLATE_ID',       // Add your template ID
    {
      from_name: form.value.name,
      from_email: form.value.email,
      message: form.value.message,
      to_email: 'kolorybk203@gmail.com'
    }
  );
};
```

### 4. Create Email Template (in EmailJS Dashboard)
1. Go to Email Templates
2. Create a new template with these template variables:
   - `{{from_name}}` - User's name
   - `{{from_email}}` - User's email
   - `{{message}}` - User's message
   - `{{to_email}}` - Your receiving email

Example template:
```
Subject: New Booking Request from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

### 5. Test It Out!
- Run `npm run dev`
- Visit `http://localhost:5173`
- Fill out the booking form and submit
- Check your email!

## Features
✅ No backend server needed  
✅ Form validation  
✅ Loading states  
✅ Success/Error messages  
✅ Auto-clear form after submission  

## Free Tier Limits
- EmailJS free tier: 200 emails/month
- Perfect for a booking form!

## Production Deployment
- Deploy to Vercel, Netlify, GitHub Pages, etc.
- EmailJS works from anywhere
- Just keep your public key safe (it's meant to be public)
