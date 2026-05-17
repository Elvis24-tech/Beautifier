# Beautifier

Beautifier is a modern beauty e-commerce web application built with React, Tailwind CSS, Django REST Framework, and PostgreSQL.  
The platform allows users to browse beauty products, manage carts and wishlists, and make purchases through an elegant responsive interface.

---

# Backend link - https://beautifier-backend-iqvq.onrender.com/api/docs/

# Features

## Buyer Features

- Browse beauty products
- Add products to cart
- Add/remove wishlist items
- Responsive modern UI
- Product quantity management
- Checkout system
- Mobile-friendly design
- Smooth animations and transitions

---

## Admin Features

- Secure admin dashboard
- Add products
- Edit products
- Delete products
- Firebase authentication protection
- Admin-only access

---

## Payment Integration

- M-Pesa STK Push integration
- Django backend API handling
- Secure payment callbacks

---

# Tech Stack

## Frontend

- React.js
- Tailwind CSS
- React Router DOM
- Context API

---

## Backend

- Django
- Django REST Framework
- PostgreSQL

---

## Authentication

- Firebase Authentication
- Google Login
- Email/Password Admin Login

---

# Responsive Design

Beautifier is fully optimized for:

- Mobile devices
- Tablets
- Laptops
- Large desktop screens

---

# Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/beautifier.git
cd beautifier
```

---

# ⚛ Frontend Setup

## Install Dependencies

```bash
npm install
```

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🐍 Backend Setup

## Create Virtual Environment

```bash
python -m venv venv
```

## Activate Environment

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

---

## Install Backend Dependencies

```bash
pip install -r requirements.txt
```

---

## Run Migrations

```bash
python manage.py migrate
```

---

## Start Django Server

```bash
python manage.py runserver
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# Firebase Setup

Create a Firebase project and enable:

- Google Authentication
- Email/Password Authentication

Add your Firebase config inside:

```bash
src/firebase.js
```

Example:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};
```

---

# M-Pesa Setup

Configure Daraja API credentials inside Django settings:

```python
MPESA_CONSUMER_KEY = "YOUR_KEY"
MPESA_CONSUMER_SECRET = "YOUR_SECRET"
```

---

# 📂 Project Structure

```bash
beautifier/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│
├── backend/
│   ├── api/
│   ├── manage.py
│   └── requirements.txt
```

---

#  Main Pages

- Landing Page
- Buyer Dashboard
- Product Details
- Wishlist
- Cart
- Checkout
- Admin Login
- Admin Dashboard
- Admin Landing
- Orders page
- Product page

---

# Security

- Protected admin routes
- Firebase authentication
- Secure API endpoints

---

#  UI Design

The UI is inspired by luxury beauty brands with:

- Amber color palettes
- Glassmorphism effects
- Modern cards
- Smooth hover animations
- Responsive layouts

---

#  Deployment

## Frontend

Deploy using:

- Vercel
- Netlify

---

## Backend

Deploy using:

- Render

---

# Developer

Built by Elvis Muasya Kariuki

### Skills

- React.js
- Tailwind CSS
- Django
- Flask
- Python
- Firebase
- PostgreSQL

---

# License

This project is licensed under the MIT License.

---

Luxury beauty shopping experience for modern users.