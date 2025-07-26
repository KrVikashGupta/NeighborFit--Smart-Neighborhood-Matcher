# 🧭 NeighborFit – Smart Neighborhood Matcher

[![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)]()
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**NeighborFit** is a smart web application that helps users discover the perfect neighborhood in **Bangalore**, based on their **age**, **profession**, and **lifestyle preferences**. It uses a custom-built matching algorithm to suggest ideal localities with **match scores**, enabling smarter urban living decisions.

---

## ⚙️ Tech Stack

### 💻 Frontend
- ⚛️ React.js – Component-based UI
- 🎞️ Framer Motion – Smooth transitions and animations
- 🔗 Axios – API communication

### 🖥️ Backend
- ⚙️ Node.js – Runtime environment
- 🚀 Express.js – REST API server
- 📑 CSV Parser – Reads local data from CSV

---

## ✨ Features

- 🧑‍💼 Collects age, profession & lifestyle preferences
- 🧠 Recommends areas using a weighted algorithm
- 🏘️ Match score to rank suitable neighborhoods
- 📱 Responsive design for all screen sizes
- 🎯 Simple, intuitive UI with visual preference input

---

## 📂 Project Structure

```
NeighborFit/
├── neighborfit-backend/
│   ├── data/
│   │   └── bangalore_neighborhoods.csv
│   ├── server.js
│   └── package.json
├── neighborfit-frontend/
│   ├── public/
│   │   └── index.html, videos/, images/
│   ├── src/
│   │   ├── components/
│   │   │   └── Header, Form, PreferenceCard, Results, Footer, etc.
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── App.css
│   └── package.json
```

---

## 🛠️ Getting Started

### 🔙 Backend Setup

```bash
cd neighborfit-backend
npm install
npm start
```
➡ Server runs at: `http://localhost:5000`

### 🌐 Frontend Setup

```bash
cd neighborfit-frontend
npm install
npm start
```
➡ Opens in browser at: `http://localhost:3000`

---

## 🧠 Matching Algorithm

1. 📥 Accepts user inputs – age, profession, and preferences  
2. ⚖️ Applies custom weights based on profession  
3. 🧮 Calculates match scores for each neighborhood  
4. 📊 Sorts neighborhoods based on total score  
5. 🏆 Returns top N best-fit recommendations

---

## 🗃️ Data Source

The dataset includes Bangalore localities with attributes such as:
- 🛡️ Safety
- 🚉 Transport connectivity
- 🕒 Commute time
- 🌳 Green spaces
- 🎉 Social life
- 🤫 Peacefulness
- 💸 Affordability

---

## 🚀 Future Enhancements

- 🗺️ Add map visualizations (e.g., Leaflet, Google Maps)
- 🧾 Enable login & user preference history
- 🏙️ Expand to more cities (Mumbai, Pune, etc.)
- 🧭 Add filters for budget, amenities, nightlife, schools
- 🏷️ Show detailed neighborhood profiles

---

## 🎯 Why NeighborFit?

Urban relocation is overwhelming. NeighborFit solves this by:
- ✅ Personalizing neighborhood search
- ✅ Using data-driven decision-making
- ✅ Delivering clear, visual, and relevant results

---

## 👨‍💻 Author

**Vikash Kumar Gupta**  
📧 krvikashgupta@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/krvikashgupta)

---

## 📄 License

This project is licensed under the **MIT License**.
