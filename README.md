# AI Website Demo

Premium AI-powered website demo for The Techcorner AI.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open:

```text
http://localhost:3000
```

## Contact form

The contact form uses Nodemailer through:

```text
app/api/contact/route.ts
```

Use Titan Email SMTP values in `.env.local`:

```env
SMTP_HOST=smtp.titan.email
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@techcorner.ai
SMTP_PASS=YOUR_TITAN_EMAIL_PASSWORD
CONTACT_TO=info@techcorner.ai
CONTACT_FROM="The Techcorner AI Website <info@techcorner.ai>"
```

Never commit `.env.local`.

## Build

```bash
npm run build
npm run start
```
