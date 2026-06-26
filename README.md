<div align="center">

# 🤖 SIN-GPT — AI Powered Conversational Assistant

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![Groq](https://img.shields.io/badge/Groq-LLM-orange)
![Render](https://img.shields.io/badge/Deploy-Render-46E3B7)

</div>

A modern ChatGPT-inspired AI assistant built using the **MERN Stack**,
powered by **Groq Cloud LLM API**, featuring persistent chat threads,
Markdown rendering, syntax-highlighted code blocks, and a responsive
interface.

---

# ✨ Key-Features

-   🤖 AI-powered conversations using Groq Cloud
-   💬 Persistent chat threads stored in MongoDB Atlas
-   🗂 Create, switch and delete conversations
-   ⚡ Typing animation for AI responses
-   📝 Markdown rendering
-   🎨 Syntax highlighting for code blocks
-   📱 Responsive ChatGPT-inspired interface
-   🔄 RESTful Express API
-   ☁️ Deployed on Render

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React + Vite | UI |
| Context API | Global state |
| React Markdown | Markdown rendering |
| Rehype Highlight | Code highlighting |
| CSS3 | Styling |

## Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | REST API |
| Mongoose | ODM |
| MongoDB Atlas | Database |
| Groq Cloud | LLM API |
| CORS | Cross-origin requests |
| dotenv | Environment variables |

## Deployment

-   Render
-   MongoDB Atlas
-   GitHub

---

# 📁 Project Structure

``` text
SIN-GPT
│
├── Backend
│   ├── models
│   │   └── Thread.js
│   ├── routes
│   │   └── chat.js
│   ├── utils
│   │   └── openai.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend
│   ├── public
│   ├── src
│   │   ├── App.jsx
│   │   ├── Chat.jsx
│   │   ├── ChatWindow.jsx
│   │   ├── Sidebar.jsx
│   │   ├── MyContext.jsx
│   │   └── *.css
│   ├── vite.config.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🎨 UI Highlights

- Left sidebar for chat history
- New chat creation button
- Thread selection and deletion
- Main chat window with message bubbles
- Input box fixed at the bottom
- AI response rendering with Markdown and code highlighting
- Typing effect for assistant messages

---

# 🏗️ Architecture

``` text
User
   │
   ▼
React Frontend
   │
fetch()
   │
   ▼
Express API
   │
   ├── MongoDB Atlas
   │      │
   │      └── Stores Threads
   │
   └── Groq Cloud
           │
           └── Generates AI Response
```

---

# 🗝️ Key Components

## `App.jsx`
Manages global state with React Context and provides:
- prompt
- reply
- current thread ID
- chat history
- thread list
- new chat state

## `ChatWindow.jsx`
Handles:
- user input
- sending messages
- loading state
- switching between new chat and existing chat
- top navigation dropdown

## `Chat.jsx`
Handles:
- rendering chat messages
- typing animation for replies
- Markdown rendering
- syntax highlighting

## `Sidebar.jsx`
Handles:
- fetching all saved threads
- switching threads
- deleting threads
- creating a new chat session

---

# 📖 API Routes

| Method | Route | Description |
|---|---|---|
| POST | `/api/chat` | Send prompt & receive AI response |
| GET | `/api/thread` | Get all chat threads |
| GET | `/api/thread/:threadId` | Retrieve a thread |
| DELETE | `/api/thread/:threadId` | Delete a thread |

---

# ❓ How It Works

1. The user enters a prompt in the frontend.
2. The frontend sends `message` and `threadId` to the backend.
3. The backend stores the message inside MongoDB.
4. The backend calls Groq Cloud to get an assistant reply.
5. The reply is saved in the same thread and returned to the frontend.
6. The frontend renders the response with Markdown formatting and typing animation.

---

# 💬 Chat Flow

``` text
User Prompt
      │
      ▼
POST /api/chat
      │
      ▼
Groq API Response
      │
      ▼
Save Thread in MongoDB
      │
      ▼
Typing Animation
      │
      ▼
Rendered Markdown Reply
```

---

# 📒 Data Models

## `Thread`
Each thread stores:
- `threadId`
- `title`
- `messages`
- `createdAt`
- `updatedAt`

## Message Structure
Each message contains:
- `role` (`user` or `assistant`)
- `content`
- `timeStamp`

---

# 🗄️ Database Schema

``` js
Thread {
  threadId: String,
  title: String,
  messages: [
    {
      role: "user" | "assistant",
      content: String
    }
  ],
  createdAt: Date,
  updatedAt: Date
}
```

---

# 🤖 Groq Integration

The backend uses Groq Cloud through an OpenAI-compatible endpoint.  
The assistant response is generated from the latest user message and then saved in MongoDB.

---

# ☁️ Render Deployment

The application is deployed on **Render** using separate frontend and backend services.

The React frontend is hosted as a **Static Site**, while the Express backend runs as a **Web Service**. Both services communicate securely through environment variables, with **MongoDB Atlas** handling data persistence and **Groq Cloud** providing AI-powered responses.

---

# 📁 Folder Purpose Summary

- **Backend**: API server, database logic, AI integration
- **Frontend**: UI, context state, thread rendering, typing animation
- **MongoDB**: persistent chat storage
- **Groq**: AI answer generation
- **Render**: deployment platform

---

# 🚀 Getting Started

## Clone

``` bash
git clone https://github.com/singhal-876/SIN-GPT.git
cd SIN-GPT
```

## Backend

``` bash
cd Backend
npm install
```

Create `.env`

``` env
PORT=5000
MONGODB_URI=your_mongodb_uri
GROQ_API_KEY=your_groq_api_key
```

Run

``` bash
npm start
```

## Frontend

``` bash
cd Frontend
npm install
```

Create `.env`

``` env
VITE_API_URL=http://localhost:5000
```

Run

``` bash
npm run dev
```

---

# 🌐 Deployment on Render

## Backend
- Create a **Web Service**
- Root Directory: `Backend`
- Build Command: `npm install`
- Start Command: `npm start`
- Add environment variables from `Backend/.env`

## Frontend
- Create a **Static Site**
- Root Directory: `Frontend`
- Build Command: `npm run build`
- Publish Directory: `dist`
- Add `VITE_API_URL` pointing to your deployed backend

---

# 📚 Learning Outcomes

- Full-Stack MERN Development
- REST API Design
- AI API Integration
- MongoDB Data Modeling
- React Context API
- State Management
- Markdown Rendering
- Deployment with Render
- Environment Variable Management
- Cloud Database Integration

---

# 🚀 Future Improvements

SIN-GPT is continuously evolving. Some planned enhancements include:

### 🤖 AI Features

* Support multiple AI models (Groq, OpenAI, Gemini, Claude)
* Streaming responses for real-time token generation
* AI model selection from the UI
* Conversation summarization
* Prompt templates and reusable prompts

### 💬 Chat Experience

* Chat search functionality
* Pin and favorite conversations
* Rename chat threads
* Export chats as PDF, Markdown, or TXT
* Share conversations via public links

### 🎙️ Multimodal Features

* Voice input (Speech-to-Text)
* Text-to-Speech responses
* Image understanding
* Image generation
* File upload and document-based Q&A

### 🔒 Authentication & Security

* User authentication (JWT/OAuth)
* Google & GitHub Sign-In
* Personal chat history
* Role-based access
* Rate limiting and API protection

### 📱 User Experience

* Dark/Light theme
* Responsive mobile interface
* Keyboard shortcuts
* Auto-scroll improvements
* Typing indicators and loading skeletons

### ☁️ Cloud & Performance

* Docker support
* Redis caching
* Response streaming
* CI/CD with GitHub Actions
* Kubernetes deployment

---

# 🤝 Contributing

Contributions are always welcome! If you'd like to improve SIN-GPT, follow the steps below.

## Fork & Clone

```bash
git clone https://github.com/singhal-876/SIN-GPT.git
cd SIN-GPT
```

## Install Dependencies

#### Backend

```bash
cd Backend
npm install
```

#### Frontend

```bash
cd ../Frontend
npm install
```

## Configure Environment Variables

Create a `.env` file inside both the **Backend** and **Frontend** directories.

#### Backend

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
```

#### Frontend

```env
VITE_API_URL=http://localhost:5000
```

## Run the Project

#### Backend

```bash
cd Backend
npm start
```

#### Frontend

```bash
cd Frontend
npm run dev
```

---

### Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

---

### Make Changes & Commit

```bash
git add .
git commit -m "Add feature description"
git push origin feature/your-feature-name
```

---

### Open a Pull Request

* Fork the repository
* Create a new feature branch
* Commit your changes
* Push the branch to GitHub
* Open a Pull Request
* Clearly describe your implementation
* Wait for review and feedback

---

### Development Guidelines

* Follow the existing project structure
* Write clean and readable code
* Use meaningful variable and function names
* Keep components modular and reusable
* Handle errors gracefully
* Test features before submitting
* Maintain consistent formatting

---

### Suggested Contributions

* Improve UI/UX
* Add new AI model integrations
* Optimize API performance
* Enhance Markdown rendering
* Improve mobile responsiveness
* Add unit and integration tests
* Implement authentication
* Build new productivity features

---

### Report Bugs

When reporting an issue, please include:

* Clear description of the bug
* Steps to reproduce
* Expected behavior
* Screenshots (if applicable)
* Browser and Operating System
* Node.js version
* Any relevant logs or error messages

---

Thank you for contributing to **SIN-GPT**! Your contributions help make the project better for everyone. 🚀

---

# 👨‍💻 Author

### Abhinav Singhal
- **📍 Location:** Dehradun, Uttarakhand, India
- **📧 Email:** [abhinavasinghal876@gmail.com](mailto:abhinavasinghal876@gmail.com)
- **💼 LinkedIn:** [Abhinav Singhal](https://www.linkedin.com/in/abhinav-singhal-069a16260)
- **🐙 GitHub:** [singhal-876](https://github.com/singhal-876)

### Tech Stack

* **Frontend:** React.js, Vite, CSS3, React Context API, React Markdown, Rehype Highlight
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas, Mongoose
* **AI Integration:** Groq Cloud API (OpenAI-Compatible API)
* **Deployment:** Render
* **Tools:** Git, GitHub, VS Code, Thunder Client, npm

### Other Projects
- [Mini Airbnb](https://github.com/singhal-876/Mini_Airbnb)
- [Data Job Analysis](https://github.com/singhal-876/Data_Job_Analysis)
- [To-Do App](https://github.com/singhal-876/To_Do_App)

### Acknowledgments

* **Groq Cloud** – High-speed LLM inference powering AI conversations.
* **MongoDB Atlas** – Cloud-hosted NoSQL database for storing chat threads and conversation history.
* **React** – Component-based frontend library used to build the user interface.
* **Vite** – Lightning-fast frontend build tool and development server.
* **Express.js** – Backend framework used to build secure RESTful APIs.
* **Render** – Cloud platform used to deploy both the frontend and backend services.
* **React Markdown & Rehype Highlight** – Enable Markdown rendering and syntax-highlighted code blocks.
* **OpenAI-Compatible API Standard** – Enables seamless integration with Groq Cloud using the OpenAI API format.
* **ChatGPT** – Inspired the conversational interface and overall user experience.

---

<div align="center">

## Made with ❤️ by Abhinav Singhal
#### Last Updated: June 26, 2026

</div>