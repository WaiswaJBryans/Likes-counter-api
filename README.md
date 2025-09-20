# Like Counter API & React Toggle Button

A full-stack project demonstrating a **global like counter** stored in **MongoDB**, with a **React frontend toggle button** that increments/decrements likes. Designed to be fully offline and structured for scalability.

---

## Table of Contents

- [Features](#features)  
- [Technologies](#technologies)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
- [API Endpoints](#api-endpoints)  
- [React Button Usage](#react-button-usage)  
- [License](#license)  

---

## Features

- Global like counter persisted in **MongoDB**.  
- React button toggles between liked (red) and unliked (gray).  
- Increment or decrement likes with a single click.  
- Fully separated backend: **models, controllers, routes**.  
- Offline-friendly — no internet required.  
- Easy to extend for users, items, or multiple counters.  

---

## Technologies

- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Frontend**: React, Axios  
- **Others**: VS Code, npm  

---

## Project Structure

likes-counter-api/
├─ index.js # Main server
├─ models/
│ └─ LikeCounter.js # MongoDB schema
├─ controllers/
│ └─ likesController.js # Business logic
├─ routes/
│ └─ likes.js # API endpoints
├─ client/
│ └─ LikeButton.js # React toggle button
└─ package.json

yaml
Copy code

---

## Getting Started

### Backend

1. Clone the repository:

git clone <repo-url>
cd likes-counter-api
Install dependencies:


npm install
Start MongoDB :


node index.js
Server runs on: http://localhost:3000

## Frontend (React Button)
Ensure you have a React app setup (create-react-app or Vite).

Copy LikeButton.jsx into your components folder.

Install Axios:

npm install axios
Use the button in your app:

import LikeButton from './components/LikeButton';

function App() {
  return (
    <div>
      <h1>Like Counter</h1>
      <LikeButton />
    </div>
  );
}
API Endpoints
Method	Endpoint	Description
GET	/likes	Fetch current like count
POST	/likes	Increment like count by 1
POST	/likes/decrement	Decrement like count by 1

React Button Behavior
Red button → liked; clicking decrements like count.

Gray button → unliked; clicking increments like count.

Updates the backend and frontend in real-time.

License
This project is open-source and available under the MIT License.


Copy code

---
