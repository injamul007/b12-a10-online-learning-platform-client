# 🎓 SkilledHub — Online Learning Platform

## 📘 Project Name
**SkilledHub - Online Learning Platform**

---

## 🎯 Project Purpose
**SkilledHub** is a modern and responsive **Online Learning Platform** where learners can explore, share, and enroll in various courses built with the latest **MERN Stack** technologies.  
It provides a seamless and secure environment for instructors to manage their courses and for students to enhance their learning experience.  

**The main goal** of this project is to create a professional, interactive, and user-friendly platform that bridges the gap between instructors and learners through digital education.

---

## 🌐 Live URL
🔗 **Live Site:** https://skilledhub-online-learning-platform.netlify.app/

---

## 🚀 Key Features

### 🏠 Home Page
- Hero banner highlighting featured courses  
- Category-wise course filtering  
- Popular & Latest Courses section  
- Smooth animations with Framer Motion  
- Responsive layout for mobile, tablet, and desktop  

### 🔐 Authentication
- Firebase Authentication (Email/Password + Google Sign-In)  
- Login, Registration, and Logout system  
- Protected routes for Dashboard and Course Details pages  
- User state management with React Context API  
- Secure access — only logged-in users can add or view private content  

### 📊 Dashboard System
- **Dedicated**  **Learners**  **Dashboards** with a Single-Role System
  - My Enrolled Courses  
  - Add New Course  
  - My Added Courses  

### 🧾 CRUD Functionalities
- Add, Edit, Update, and Delete courses with ease  
- Instant UI updates after performing CRUD actions  
- Image uploads using **imgbb API** and stored via hosted URL  

### 🎨 UI & Design
- Fully Responsive and Modern UI  
- Built with **Tailwind CSS** and **Framer Motion**  
- Toast notifications using **SweetAlert2** for user feedback  
- Unique page titles and 404 (Not Found) page  
- Clean design focusing on accessibility and user experience  

---

## 🧩 Tech Stack Used

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React.js, Tailwind CSS, React Router |
| **Backend** | Node.js, Express.js, MongoDB |
| **Authentication** | Firebase (Email/Password, Google Sign-In) |
| **Image Upload** | imgbb API |
| **Hosting** | Netlify (Client), Vercel (Server) |
| **Utilities & Tools** | Axios, Framer Motion, SweetAlert2 |

---

## 📦 NPM Packages Used

| Package Name | Purpose |
|---------------|----------|
| **react** | Core library for building UI |
| **react-router** | Page navigation and protected routing |
| **firebase** | User authentication and security |
| **axios** | Data fetching from backend |
| **tailwindcss** | Utility-first CSS framework |
| **DaisyUI** | Tailwind CSS - Component - For Designing |
| **framer-motion** | Page transitions and animations |
| **sweetalert2** | Custom toast notifications |
| **React-Toastify** | Toast notifications |
| **react-icons** | Beautiful icons for UI enhancement |


## 📦 Dependency

```json
{
    "@tailwindcss/vite": "^4.1.17",
    "axios": "^1.13.2",
    "firebase": "^12.5.0",
    "framer-motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.5",
    "react-spinners": "^0.17.0",
    "react-toastify": "^11.0.5",
    "sweetalert2": "^11.26.3",
    "swiper": "^12.0.3",
    "tailwindcss": "^4.1.17"
}
```

## 📥 Installation & Setup

  # Clone the repository
git clone https://github.com/injamul007/b12-a10-online-learning-platform-client.git

# Navigate into the project directory
cd your-repo

# Install all required dependencies
npm install

# Start the development server
npm run dev
