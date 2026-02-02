# Blogging Platform

A full-stack blogging platform built with **MERN** (MongoDB, Express, React, Node.js), allowing users to create, read, update, and delete blogs. The project separates **frontend** and **backend** code into dedicated folders for maintainability.

---

## Prerequisites

Make sure you have the following installed:

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/blogging-platform.git
cd blogging-platform
```

### 2. Setup Backend

```bash
cd backend
npm install
```

#### Configure Environment Variables

Create a `.env` file in the `backend` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#### Run Backend

```bash
npm run dev
```

> The backend server will start at `http://localhost:5000`.

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

#### Configure Frontend Environment Variables

Create `.env` in the `frontend` folder:

```
VITE_API_BASE_URL=http://localhost:5000
```

#### Run Frontend

```bash
npm run dev
```

> The frontend will start at `http://localhost:5173` (or as shown in terminal).

---

## Usage

1. Open your browser at the frontend URL (`http://localhost:5173`)
2. Navigate through the pages:
   - **Home / Blogs:** View all blogs
   - **Write:** Create a new blog
   - **Admin:** Manage users and blogs (if implemented)

3. Use **JWT tokens** for authenticated routes (like creating, updating, deleting blogs).

---

## API Routes (Backend Overview)

### Blogs

| Method | Route          | Description         |
| ------ | -------------- | ------------------- |
| GET    | `/blogs`       | Fetch all blogs     |
| GET    | `/blogs/:slug` | Fetch a single blog |
| POST   | `/blogs`       | Create a new blog   |
| DELETE | `/blogs/:id`   | Delete a blog       |

### Users

| Method | Route        | Description     |
| ------ | ------------ | --------------- |
| GET    | `/users`     | Fetch all users |
| DELETE | `/users/:id` | Delete a user   |

> Note: Some routes require **authentication** via JWT token.

---

## Notes

- The project uses **React Context** for global state management (`blogs`, `users`)
- **Frontend uploads** images using `FormData`
- Ensure the backend is running before using the frontend, otherwise API calls will fail

---
