# **🌐 Role-Based Authentication Frontend (Next.js + Tailwind + JWT)**

This is the **frontend** for the **Role-Based Authentication System**, built using **Next.js**, **Tailwind CSS**, and **Context API** for global state.
It supports **Login, Register, Role-Based Dashboards (Admin/User)**, protected routes, and CRUD screens.

---

## **⚙️ Tech Stack**

* **Next.js (App Router)**
* **React**
* **Tailwind CSS**
* **Context API / LocalStorage**
* **JWT-based Authentication**
* **Render / Vercel Deployment**

---

## **📁 Project Structure**

```
frontend/
│── pages/
│   ├── _app.tsx
│   ├── dashboard.tsx
│   ├── index.tsx
│   ├── signup.tsx
│── styles/
│── .env.local
│── package.json
│── README.md
```

---

## **📦 Installation & Setup (Local)**

### **1️⃣ Clone the repo**

```sh
git clone https://github.com/your-username/your-frontend-repo.git
cd frontend
```

### **2️⃣ Install dependencies**

```sh
npm install
```

### **3️⃣ Create `.env.local` file**

Add this:

```
NEXT_PUBLIC_API_URL=https://rolebasedauthbackend.onrender.com
```

> **Important:**
> Values must start with **NEXT_PUBLIC_** to be available in the browser.

### **4️⃣ Start the development server**

```sh
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## **🔐 Features**

### **Authentication**

* User login & registration
* JWT stored in **localStorage**
* Auto-redirect if logged-in user revisits login/register pages

### **Role-Based Dashboards**

* **Admin Dashboard**

  * View all users
  * Manage items
* **User Dashboard**

  * Manage personal items

### **Protected Routes**

* Users cannot access Admin pages
* Unauthenticated users are redirected to `/login`

---

## **📌 API Configuration**

All API calls use:

```js
process.env.NEXT_PUBLIC_API_URL
```

Example:

```js
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
  method: "POST",
  body: JSON.stringify(formData),
});
```

---

## **🚀 Deployment Instructions (Vercel)**

### **1️⃣ Push your code to GitHub**

```sh
git add .
git commit -m "frontend updated"
git push origin main
```

### **2️⃣ Go to Vercel**

* Open: [https://vercel.com](https://vercel.com)
* Import your GitHub repo

### **3️⃣ Add Environment Variable in Vercel**

Go to:
**Project → Settings → Environment Variables**

Add:

| Key                   | Value                                       |
| --------------------- | ------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | `https://rolebasedauthbackend.onrender.com` |

Click **Save** → **Redeploy**.

### **4️⃣ Deploy**

Vercel automatically builds and deploys.
You get a live URL like:

```
https://your-frontend.vercel.app
```

---

## **📁 Build Command**

Vercel auto-detects Next.js, but locally:

```sh
npm run build
npm start
```

---
