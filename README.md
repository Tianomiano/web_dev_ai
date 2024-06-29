 web_dev_ai

 Simple Web Application

 Description
This is a simple web application developed as part of a web development task. The application consists of a front-end form for user input and a back-end server to handle data submission and storage.

 Features
- Front-end form with validation.
- Back-end server using Express.js.
- In-memory database for storing user data.
- Success message upon form submission.

 Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- AI Tools: ChatGPT, GitHub Copilot

 Installation
1. Clone the repository:
    bash
    git clone https://github.com/your-repo/simple-web-app.git
    cd simple-web-app
    
2. Install dependencies:
    bash
    npm install
    
3. Start the server:
    bash
    node server.js
    
4. Open your browser and go to http://localhost:3000.

 Usage
- Fill in the "Name" and "Email" fields and submit the form.
- If the form is valid, data will be sent to the server and stored in an in-memory database.

 Issues and Resolutions
- 404 Error (Cannot GET /)**: Fixed by serving static files correctly with express.static.
- Form Validation**: Ensured proper email format and non-empty fields.
- AI Assistance**: Used AI tools for code suggestions, debugging, and improving code quality.