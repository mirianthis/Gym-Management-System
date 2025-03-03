# Gym Management System

## 📌 Project Overview
The **Gym Management System** is a web-based application designed to streamline gym operations, including **membership management, staff management, admin panel and gym settings configuration**. It provides an intuitive **Angular-based frontend** and a **Django REST API backend** for efficient data handling.

## 🏗️ Tech Stack
### Frontend:
- **Angular** (Standalone API-based architecture)
- **TypeScript**
- **Bootstrap** (UI styling)
- **RxJS** (Reactive programming)
- **Angular HTTPClient** (API integration)

### Backend:
- **Django** (Python-based web framework)
- **Django REST Framework (DRF)** (API development)
- **MS SQL** (Database management)
- **JWT Authentication** (Secure login and user authentication)

---
## 📂 Project Structure

### **Frontend (Angular)**
```
Frontend/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   ├── registration/
│   │   │   ├── dashboard/
│   │   │   ├── layout/
│   │   │   ├── members-list/
│   │   │   ├── membership-list/
│   │   │   ├── staff-list/
│   │   │   ├── settings/
│   │   ├── services/
│   │   ├── models/
│   ├── assets/
│   ├── environments/
│   ├── main.ts
│   ├── app.routes.ts
│   ├── app.config.ts
```
### **Backend (Django)**
```
gym_management_system/
├── authentication/
├── members/
├── membership/
├── staff/
├── settings/
├── media/
├── gym_management_system/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   ├── asgi.py
├── manage.py
```

---
## 🚀 Features
✅ **User Authentication** (Registration, Login, Logout with JWT)  
✅ **Membership Management** (CRUD operations for members)  
✅ **Staff Management** (Manage gym staff & roles)  
✅ **Gym Settings** (Configure gym operational settings)  
✅ **Angular Standalone Components** (No NgModules required)  
✅ **RESTful API** (Django REST Framework)  
✅ **Bootstrap UI Enhancements**  
✅ **Toast Notifications** (Success/Error messages)  

---
## 🔧 Installation & Setup

### **1️⃣ Backend (Django)**
```sh
# Clone the repository
git clone https://github.com/your-username/gym-management-system.git
cd gym-management-system

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start the Django server
python manage.py runserver
```

### **2️⃣ Frontend (Angular)**
```sh
# Navigate to the frontend directory
cd Frontend

# Install dependencies
npm install

# Start the Angular development server
npm run dev
```
The frontend will be available at `http://localhost:4200/`, and the backend at `http://127.0.0.1:8000/`.

---
## 🔑 API Endpoints (Backend)

| Endpoint                        | Method | Description                  |
|---------------------------------|--------|------------------------------|
| `/api/authentication/register/` | POST   | Register a new user          |
| `/api/authentication/login/`    | POST   | User login (JWT token)       |
| `/api/members/`                 | GET    | Fetch all gym members        |
| `/api/membership/`              | GET    | Retrieve membership plans    |
| `/api/staff/`                   | GET    | Fetch staff details          |
| `/api/settings/`                | GET    | Retrieve gym settings        |
| `/api/settings/check/`          | GET    | Check if settings exist      |

---
## ✨ Features in Progress
- [ ] Payment Gateway Integration (Stripe/PayPal)
- [ ] User Progress View
- [ ] Mobile Responsiveness Improvements

---
## 💡 Contribution Guide
Want to contribute? Follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a Pull Request.

---
## 📄 License
This project is **open-source** and available under the [MIT License](LICENSE).

---
## 📩 Contact
For questions or collaboration, feel free to reach out!

📧 **Email:**  amirianthis@gmail.com  
🐙 **GitHub:** [mirianthis](https://github.com/mirianthis)  

