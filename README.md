# 📦 Items Manager

A full-stack web application for managing items with a clean UI and RESTful API.

## 👨‍💻 Developer

**Pantane**  
- [Contact-Me](https://nf-d.netlify.app)
- Full-stack developer passionate about creating elegant web solutions

## 🚀 Live Demo

[🔗44r-§](https://your-app.onrender.com)

## 📋 Features

- ✅ Add new items
- ✅ Delete existing items  
- ✅ Real-time item count
- ✅ Responsive design
- ✅ Smooth animations
- ✅ RESTful API endpoints

## 🛠️ Tech Stack

**Frontend:**
- HTML5
- CSS3 (with animations)
- Vanilla JavaScript

**Backend:**
- Node.js
- Express.js
- CORS middleware

**Deployment:**
- Render (Backend + Frontend)

## 📁 Project Structure

```

personal-items-app/
├── frontend/
│   ├── index.html      # Main page
│   ├── style.css       # Styling
│   └── script.js       # Frontend logic
├── backend/
│   ├── server.js       # API server
│   └── package.json    # Dependencies
├── .gitignore
└── README.md

```

## 🏃‍♂️ Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/pantane1/44r.git
cd items-manager
```

1. Install backend dependencies

```bash
cd backend
npm install
```

1. Run the server

```bash
npm start
# or with auto-reload
npm run dev
```

1. Open the app

· Frontend: http://localhost:3001
· API: http://localhost:3001/api/items

🔌 API Endpoints

Method Endpoint Description
GET /api/items Get all items
POST /api/items Add new item
DELETE /api/items/:id Delete an item

Example API Requests

GET all items

```bash
curl http://localhost:3001/api/items
```

POST new item

```bash
curl -X POST http://localhost:3001/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"New Item"}'
```

DELETE item

```bash
curl -X DELETE http://localhost:3001/api/items/1
```

🚢 Deployment to Render

1. Push code to GitHub
2. Create new Web Service on Render
   · Connect GitHub repository
   · Build Command: cd backend && npm install
   · Start Command: cd backend && node server.js
3. Your app will be live at https://your-app.onrender.com

🎨 Design Features

· Gradient background
· Smooth fade/slide animations
· Hover effects on items and buttons
· Responsive for mobile devices
· Loading states and error handling

📝 License

[MIT License](https://github.com/Pantane1/44r/blob/main/LICENSE) - feel free to use and modify!

🙏 Credits

Developed with ❤️ by **[Pantane](https://wa.me/254740312402)**

---

Questions or suggestions? Reach out via [Pantane's website](https://pantane.vercel.app)
