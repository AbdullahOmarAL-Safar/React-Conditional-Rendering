# 🧠 React Conditional Rendering - UserGreeting Component

This is a simple React project that demonstrates **conditional rendering** using props.  
It shows a personalized greeting message depending on the user's login status.

---

## 🔧 Technologies Used

- ⚛️ React (Vite)
- 💡 JSX
- 🎨 CSS

---

## 📁 Project Structure

📦 my-react-app
┣ 📂src
┃ ┣ 📜App.jsx
┃ ┣ 📜UserGreeting.jsx
┃ ┣ 📜index.css
┣ 📜index.html
┣ 📜package.json

yaml
Copy
Edit

---

## ✨ Features

- Displays a **welcome message** if the user is logged in.
- Prompts the user to log in if not logged in.
- Props used:
  - `isLoggedIn` (boolean)
  - `userName` (string)

---

## 💻 Demo

```jsx
<UserGreeting isLoggedIn={true} userName="Abdullah" />
✅ Output: Welcome Abdullah

jsx
Copy
Edit
<UserGreeting isLoggedIn={false} userName="Abdullah" />
❌ Output: Please Log in To Continue

```
