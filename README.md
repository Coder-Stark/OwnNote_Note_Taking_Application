
# OwnNote - Online Note Taking Web Application 📚

This is a dynamic and fully functional **Notes Management System** built using **ReactJS** for the frontend and **Node.js** with **MongoDB** for the backend. It supports user authentication, Notes management.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### Step 1: Clone the Repository
1. Go to the repository: [OwnNote_Note_Taking_Application](https://github.com/Coder-Stark/OwnNote_Note_Taking_Application).
2. Click the green **Code** button and copy the HTTPS link.
3. Open your desired folder location, right-click, and open **Git Bash** or your terminal of choice.
4. Run the following command:
   ```bash
   git clone https://github.com/Coder-Stark/OwnNote_Note_Taking_Application
   ```

### Step 2: Setup the Backend
1. Navigate to the root directory where the `backend` and `frontend` folders are located.
2. Create a `.env` file in the backend directory (`backend/.env`) and add the following environment variables:
   ```env
   MONGO=<secretkey>
   JWT_SECRET=<secretkey>
   ```
3. Open your terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
4. Install the backend dependencies:
   ```bash
   npm install
   ```
5. Start the backend server:
   ```bash
   npm start
   ```
   You should see the following message in the terminal:
   ```
   Server is listening on http://localhost:8080
   ```

### Step 3: Setup the Frontend
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```
4. The project will open in your default browser.

---

## 🛠️ Features

1. **Dynamic Notes Management**:
   - View the list of available Notes.
   - Add new books with details like title, description, tag (Users only).
   - Edit or delete Notes (Users only).


2. **MongoDB Integration**:
   - All data is stored in MongoDB Atlas, ensuring dynamic updates.

---

## 🖼️ Screenshots

### First Look / Login Screen of Site
![first look](https://github.com/Coder-Stark/OwnNote_Note_Taking_Application/blob/master/home.png?raw=true)

### Signup Panel
![Signup Panel](https://github.com/Coder-Stark/OwnNote_Note_Taking_Application/blob/master/signup.png?raw=true)

### About OwnNote
![About](https://github.com/Coder-Stark/OwnNote_Note_Taking_Application/blob/master/about.png?raw=true)

### Add Notes
![Add Notes](https://github.com/Coder-Stark/OwnNote_Note_Taking_Application/blob/master/add%20note.png?raw=true)

### Edit Notes
![Edit Notes](https://github.com/Coder-Stark/OwnNote_Note_Taking_Application/blob/master/edit.png?raw=true)

### Users DataBase
![Users db](https://github.com/Coder-Stark/OwnNote_Note_Taking_Application/blob/master/db%20users.png?raw=true)

### Notes DataBase
![Notes db](https://github.com/Coder-Stark/OwnNote_Note_Taking_Application/blob/master/db%20notes.png?raw=true)


---

## 🤝 Contributions

Feel free to fork this repository and contribute to improving the system. Make sure to submit a pull request for any new features or fixes.

---
