# ✅ Authentication Based Academic Planner Web Application

A full-stack web app for managing daily tasks efficiently. Users can add, edit, delete, and mark tasks as completed. Built with **Express** and **MongoDB**, the app provides a clean interface and persistent storage for task management.

---

## 🛠️ Technologies Used

- ⚡ Node.js + Express — backend server and routing  
- 🍃 MongoDB + Mongoose — database and schema modeling  
- 🔑 bcrypt — secure password hashing  
- 🛡️ MongoDB Authentication — user login & data privacy  
- 🎨 Handlebars (HBS) — templating for dynamic views  
- ✅ ESLint — coding standards and best practices  
- 🧪 Jest — unit testing (form submission & task completion)

---

## ✨ Features

- 👤 User registration & login (with hashed passwords)  
- 📝 Add, edit, and delete tasks  
- 📅 Due date tracking for each task  
- ✅ Mark tasks as completed  
- 🔍 Sort & filter tasks by due date or completion status  
- 📊 Persistent user-task relationship (one-to-many)

---

## 📦 Local Setup

### 1. Clone the Repo
```bash
git clone https://github.com/Youngsang-Cho1/Authentication-Based-Academic-Planner
cd Authentication-Based-Academic-Planner
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/todo-app
SESSION_SECRET=your-secret-key
PORT=3000
```

### 4. Run the App
```bash
npm start
```

App will be live at: [http://localhost:3000](http://localhost:3000)

---

## 📡 Routes

### `/login`  
- Login & registration page  

### `/tasks`  
- View all tasks for the logged-in user  

### `/tasks/new`  
- Add a new task  

### `/tasks/:id/edit`  
- Edit an existing task  

### `Delete (button)`  
- Remove a task  

---

## 🧠 Data Model

### User
```javascript
{
  username: "Aiden",
  hash: "encrypted_password",
  tasks: [ObjectId, ObjectId]
}
```

### Task
```javascript
{
  user: ObjectId,
  title: "AIT 467 Homework 1",
  description: "Submit GitHub repo link on Gradescope",
  dueDate: "2024-03-19",
  completed: false
}
```

---

## 🧾 Project Structure

```
Authentication-Based-Academic-Planner/
├── __tests__/           # Jest test cases
├── .devcontainer/       # VS Code dev container setup
├── public/              # static assets (css, js)
├── src/                 # main app source code (Express routes, db, views 등)
├── .env                 # environment variables (ignored in git)
├── .eslint.cjs          # ESLint config
├── .gitignore
├── eslint.config.js     # ESLint JS config
├── jest.config.js       # Jest test config
├── package.json         # project dependencies
├── package-lock.json
└── README.md
```

---

## 📝 License

MIT License © 2025 Aiden Cho  
