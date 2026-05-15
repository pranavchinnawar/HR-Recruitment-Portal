# TalentBridge - HR Recruitment Portal

A modern, responsive, and fully-featured frontend template for an IT company's HR recruitment portal. Designed with a sleek corporate UI, the portal connects top tech talent with amazing career opportunities.

## 🚀 Features

* **Multi-Page Architecture**: Well-organized structure with dedicated pages for Home, Jobs, Application, Dashboard, About, and Contact.
* **Component-Based UI**: Navigation and Footer are loaded dynamically via vanilla JavaScript to avoid code duplication across pages.
* **Responsive Design**: Fully responsive layout optimized for Desktop, Tablet, and Mobile devices using custom CSS Flexbox and Grid.
* **Dynamic Job Board**: Filterable job listings powered by JavaScript (Engineering, Data & AI, Quality).
* **Interactive Application Form**: Includes a dynamic experience slider and a drag-and-drop resume file upload UI.
* **HR Dashboard**: A functional-looking recruiter portal featuring animated statistics, candidate status tracking, and an interview scheduling interface.
* **Modern Aesthetics**: Vibrant gradients, glassmorphism elements, floating cards, and smooth CSS hover animations.

## 🛠️ Technologies Used

* **HTML5**: Semantic markup and multi-page structure.
* **CSS3**: Custom properties (variables), Flexbox, CSS Grid, animations, and transitions (No external CSS frameworks used).
* **Vanilla JavaScript (ES6)**: DOM manipulation, event handling, dynamic component injection, and dummy data generation.
* **FontAwesome 6**: Scalable vector icons.
* **Google Fonts**: Inter (sans-serif) and Outfit (display).

## 📁 Folder Structure

```text
HR_Recruitment/
│
├── index.html          # Landing Page / Hero Section
├── about.html          # About Us Page
├── jobs.html           # Job Listings Page
├── apply.html          # Application Form Page
├── dashboard.html      # HR Recruiter Dashboard
├── contact.html        # Contact Us Page
│
├── css/
│   └── style.css       # Master stylesheet with custom properties
│
├── js/
│   └── script.js       # Core logic, dummy data, filtering, and interactivity
│
└── components/
    ├── navbar.js       # Dynamic Navbar injection
    └── footer.js       # Dynamic Footer injection
```

## 💻 How to Run Locally

Because this project uses JavaScript to dynamically inject the Navbar and Footer (`components/navbar.js`), you need to run it through a local web server to avoid browser CORS policy restrictions on `file://` protocols.

### Option 1: VS Code Live Server (Recommended)
1. Open this folder in Visual Studio Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will automatically open in your browser at `http://127.0.0.1:5500`.

### Option 2: Python HTTP Server
If you have Python installed, you can run a simple server from your terminal:
1. Open your terminal and navigate to the project directory.
2. Run the command: `python -m http.server 8000` (or `python3 -m http.server 8000` on Mac/Linux).
3. Open your browser and go to `http://localhost:8000`.

### Option 3: Node.js (http-server)
1. Install http-server globally: `npm install -g http-server`
2. Run `http-server` in the project directory.
3. Open your browser to the URL provided in the terminal.

## 📝 License

This project is created for demonstration and educational purposes. Feel free to use and modify the code as needed.
