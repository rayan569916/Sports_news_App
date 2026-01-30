# Sports News App

A full-stack **Sports News Application** that provides users with the latest sports headlines and content from online sources. This application was developed as a project to demonstrate a complete real-world workflow including a frontend UI, backend API, and data integration with external sports news services.

---

## 🏆 Key Features

✔ Fetches live sports news via a third-party API  
✔ Displays news articles with title, image, date & source  
✔ Search & filter news by keyword or category  
✔ Modular Angular frontend  
✔ Python Flask backend exposes REST API  
✔ Clean, responsive UI

---

## 📦 Tech Stack

**Frontend**
- Angular (version 21)
- HTML, CSS, TypeScript
- Responsive UI components

**Backend**
- Python Flask
- REST API for news fetch and data handling
- CORS enabled for cross-domain access

**External API**
- (e.g., NewsAPI / Sports API) — add which one you used

---

## 🧠 Architecture
Angular Frontend
│
▼
Flask Backend API
│
▼
External Sports News API


The frontend sends requests to the Flask backend, which in turn fetches news from the external API and returns structured JSON data for display.

---

## 🚀 Features in Detail

### 📰 Sports News Browsing
Users can view a list of the latest sports news articles aggregated from a live news provider.

### 🔍 Search & Filter
Users can search for news by keywords, and filter results by category (e.g., football, basketball, cricket).

### 📱 Responsive UI
The UI adjusts for desktop and mobile screens for optimal viewing.

---

## 📁 Folder Structure
/
├── Angular-FrontEnd/
│ ├── src/
│ ├── angular.json
│ └── package.json
├── Flask-Backend/
│ ├── app.py
│ ├── routes/
│ └── requirements.txt
├── .gitignore
└── README.md


---

## 📌 Getting Started

### Requirements
- Node.js 18+
- Python 3.10+
- Angular CLI

### Setup Frontend
cd Angular-FrontEnd
npm install
ng serve
cd Flask-Backend
pip install -r requirements.txt
python app.py
Visit http://localhost:4200 in your browser to view the app.

💡 Future Enhancements
• User authentication & favorites
• Caching API results for performance
• Category tabs (Football, Cricket, Basketball)
• Bookmark articles

📜 License
This project is open-source — feel free to use and improve!
