
---

## 🖥️ Backend Setup

1. Navigate to backend folder

   ```
   cd backend
   ```

2. Initialize Node project

   ```
   npm init -y
   ```

3. Install Prisma and Client

   ```
   npm install prisma@5.10.2 @prisma/client@5.10.2
   ```

4. Initialize Prisma

   ```
   npx prisma init
   ```

5. Push database schema

   ```
   npx prisma db push
   ```

6. Start backend server

   ```
   node server.js
   ```

7. **Important:**

   * Create a NeonDB (AWS hosted) database account
   * Copy the connection string
   * Replace it inside `.env` file

---

## 🎨 Frontend Setup

1. Create React application

   ```
   npx create-react-app frontend
   ```

2. Navigate to frontend folder

   ```
   cd frontend
   ```

3. Start React development server

   ```
   npm start
   ```

---

## 🗄️ Database

* Use **NeonDB** as the database service.

---

## 🔧 Git Setup

1. Remove existing Git from frontend

   ```
   Remove-Item -Recurse -Force frontend/.git
   ```

2. Initialize new repository

   ```
   git init
   ```

3. Add files

   ```
   git add .
   ```

4. Commit changes

   ```
   git commit -m "Initial Commit"
   ```

5. Set main branch

   ```
   git branch -M main
   ```

6. Add remote repository

   ```
   git remote add origin <YOUR_REPOSITORY_URL>
   ```

7. Push code to GitHub

   ```
   git push -u origin main
   ```

---