
# 📸 Basic Instagram Clone

A simple **Instagram Clone** built using **Node.js**, **Express**, and **EJS**, allowing users to create, view, edit, and delete image posts. Designed with a clean UI and basic social media features like captions, usernames, likes, and sharing icons.

## 🛠️ Features

- ✅ Create a new post with image and caption  
- 📝 Edit existing posts  
- ❌ Delete posts using method override  
- 🔍 Search bar UI (basic input box for future implementation)  
- ❤️ Like, 💬 Comment, 📤 Share icons (static UI)  
- 📱 Responsive design using CSS  
- 🧑‍💻 Server-side rendering using **EJS**

---

## 🖼️ Example Screens

| Home Page  

 ![image](https://github.com/user-attachments/assets/ba62568f-4287-409f-ad61-430c53ee4c37)

| Create Post                    

![image](https://github.com/user-attachments/assets/d1db111d-9ae4-4143-b27d-a6cd0c95cb4d)

| Edit Post                     |

![image](https://github.com/user-attachments/assets/6de134f2-9985-4f23-9fb9-d78620e46221)


---

## 📂 Project Structure

```

instagram-clone/
├── public/
│   └── style.css           # Main stylesheet
├── views/
│   └── index.ejs           # Home page showing all posts
│   └── new.ejs             # Create post page
│   └── edit.ejs            # Edit post page
├── app.js                  # Main Express app
├── package.json

````

---

## ⚙️ Tech Stack

- **Frontend**: HTML, CSS, EJS
- **Backend**: Node.js, Express.js
- **Templating Engine**: EJS
- **Middleware**: `body-parser`, `method-override`
- **Icons**: FontAwesome

---

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/basic-instagram-clone.git
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node index.js
```

> Server will run on `http://localhost:8080`


---

## 📌 Future Improvements

* Add login/signup authentication
* Enable real-time likes and comments
* Image upload support (currently requires static URL)
* Search functionality
* MongoDB database integration

---

## 🙋‍♂️ Author

* **Aakash Singh** – [@sjaga](https://github.com/asjaga)

---

