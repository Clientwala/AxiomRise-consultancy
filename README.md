# AxiomRise Consultancy

**Talent, Strategy, and Governance — Under One Roof.**

Axiom Rise Consultancy Pte. Ltd. is a Singapore-incorporated **Talent & HR Solutions + Management Consultancy** firm offering end-to-end staffing services and corporate compliance solutions across Asia Pacific.

---

## 🏢 Company Info

| Detail | Value |
|--------|-------|
| **Legal Name** | Axiom Rise Consultancy Pte. Ltd. |
| **UEN** | 202614733G |
| **EA Licence No.** | 24C2078 |
| **Registered Address** | 749 Woodlands Circle, #12-616, Singapore 730749 |
| **Contact Email** | latha@axiomrise.sg |

---

## 🌐 Live Site

[axiomrise.com.sg](https://axiomrise.com.sg) _(deploy to Vercel for production)_

---

## 🧩 Services

### Talent & HR Solutions
- **Permanent Recruitment** — End-to-end talent acquisition for mid to senior-level roles
- **Temporary Staffing** — Flexible workforce solutions for seasonal & project needs
- **Contract Staffing (Out-staffing)** — Long-term project staffing with specialized skills
- **Executive Search** — Confidential C-suite and leadership-level headhunting
- **Call Centre Staffing** — Scalable customer service workforce deployment

### Management Consultancy
- Company Incorporation
- Company Secretarial
- Representative Office Setup
- Business Advisory
- Offshore Company Formation
- Work Pass / Employment Pass Applications
- Payroll Management
- Accounting Services
- Taxation & Compliance
- Digital Bookkeeping Solutions

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 15, TypeScript, Tailwind CSS 3.4, Framer Motion |
| **Backend** | Express.js, Mongoose 8, MongoDB |
| **Icons** | react-icons (Heroicons v2) |
| **Notifications** | react-hot-toast |
| **Map** | Google Maps Embed |
| **Deployment** | Vercel (Frontend) + Railway/Render (Backend) |

---

## 📁 Project Structure

```
axiomrise-consultancy/
├── Frontend/                    # Next.js 15 (App Router)
│   ├── public/
│   │   ├── logo/               # AxiomRise logo
│   │   └── images/             # Hero / About / Services / Team photos
│   └── src/
│       ├── app/                # Pages (Home, About, Services, Contact, Management Consultancy)
│       ├── components/
│       │   ├── layout/         # Navbar, Footer
│       │   ├── sections/       # Hero, AboutPreview, ServicesGrid, SourcingTalent, WhyUs, ContactForm, MapEmbed
│       │   └── ui/             # Button, Card, Badge, SectionHeading
│       └── styles/             # globals.css (Tailwind layers + custom components)
│
└── Backend/                    # Express.js API
    └── src/
        ├── server.ts           # Express server (port 5000)
        ├── lib/mongodb.ts      # Mongoose connection
        ├── models/Contact.ts   # Contact form schema
        └── routes/contact.ts   # POST /api/contact
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (local or Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/Clientwala/AxiomRise-consultancy.git
cd axiomrise-consultancy
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create `.env` in the Backend folder:

```env
MONGODB_URI=mongodb://localhost:27017/axiomrise-consultancy
PORT=5000
```

Start the backend:

```bash
npm run dev
```

Runs on **http://localhost:5000**

### 3. Frontend Setup

```bash
cd Frontend
npm install
```

Create `.env.local` in the Frontend folder:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Runs on **http://localhost:3000**

### 4. Build for Production

```bash
cd Frontend
npm run build
npm start
```

---

## 📮 Contact Form Flow

```
[Client] → POST /api/contact → Express Backend → MongoDB
```

- Client-side validation (required fields, email format, min length)
- Server-side validation with detailed error messages
- Success/error toast notifications via react-hot-toast
- TODO: Email notification via Resend/Nodemailer

---

## 🎨 Design System

| Token | Hex | Usage |
|-------|-----|-------|
| **Primary** | `#0B2545` | Headings, nav text, footer |
| **Accent** | `#C9973A` | Eyebrows, icons, CTAs, badges |
| **Soft BG** | `#EAF4FB` | Section backgrounds, nav bar |
| **Muted** | `#5B6B7A` | Body text |
| **Border** | `#E2E8EF` | Card borders, dividers |

**Typography:** Playfair Display (headings) + Inter (body)

---

## 📝 License

© 2026 Axiom Rise Consultancy Pte. Ltd. All rights reserved.
