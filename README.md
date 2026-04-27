# 🌟 Personal Portfolio Website: SWE363 Assignment 4

Welcome to my personal portfolio! This is a responsive, interactive web application built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. It was created as the final polish iteration (Assignment 4) for the SWE363 course.

## 📖 Project Overview

This website serves as a central hub for my professional identity, showcasing my background, skills, and projects. It is built natively without heavy frameworks to demonstrate a strong command of foundational web technologies. The application features a modern "Glassmorphism" aesthetic, performant micro-animations, and dynamic data fetching.

---

## ✨ Key Features

- **Dynamic Hero Section:** A personalized greeting based on the time of day, complete with a self-typing and deleting professional subtitle.
- **Visitor Memory:** The website asks for your name and remembers it using `localStorage` so it can greet you personally the next time you visit.
- **Dark Mode Support:** A sleek dark theme toggle that saves your preference globally across sessions.
- **Live GitHub Integration:** Asynchronously fetches and displays my latest repositories directly from the GitHub REST API.
- **Interactive Project Filtering:** Easily sort through my portfolio (Web, CLI, Infra) using dynamic category buttons without page reloads.
- **Scroll Animations:** Smooth fade-in and slide-up animations as you scroll down the page, powered by the highly performant `IntersectionObserver`.
- **Form Validation:** A simulated contact form with real-time JavaScript regular expression (Regex) validation for email addresses and message lengths.

---

## 🚀 Getting Started

Follow these instructions to run the website locally on your machine.

### Prerequisites
You only need a modern web browser (Chrome, Firefox, Safari, Edge) to run this application. A local web server is recommended for the best experience.

### Installation Steps

1. **Clone the Repository**
   Open your terminal and run:
   ```bash
   git clone https://github.com/abdullah202221520/id-name-assignment4.git
   cd id-name-assignment4
   ```

2. **Run the Application**
   You can view the site using any of the following methods:

   * **Method A: Direct Open (Simplest)**
     Simply double-click the `index.html` file in your file explorer, or drag and drop it into your web browser.

   * **Method B: Local Python Server (Recommended)**
     If you have Python installed, run a quick local server to ensure all assets load perfectly:
     ```bash
     python3 -m http.server 8000
     ```
     Then open your browser and navigate to: `http://localhost:8000`

   * **Method C: Using Node.js (Alternative)**
     If you have Node.js installed, you can use the `serve` package:
     ```bash
     npx serve .
     ```
     Navigate to the URL provided in the terminal (usually `http://localhost:3000`).

---

## 💡 How to Use the Program

Once you have the website open in your browser, here is how you can interact with it:

1. **Enter Your Name:** When you first load the page, you'll see an input box asking for your name in the Hero section. Type your name and click "Save". The page will instantly update to greet you by name, and it will remember you even if you refresh!
2. **Toggle Dark Mode:** In the top right of the navigation bar, click the "Toggle Dark Mode" button. The entire aesthetic of the site will shift to a deep purple theme.
3. **Filter Projects:** Scroll down to the "Projects" section. Click on the different category pills ("Web", "CLI", "Infra") to instantly filter the project grid.
4. **View Live Repositories:** Scroll to the "My GitHub Repositories" section. Wait a brief moment, and you will see the site automatically load my latest public repositories directly from GitHub.
5. **Test the Contact Form:** Go to the "Contact" section at the bottom. Try entering an invalid email or a message that is too short, and click "Send". Notice how the built-in validation catches the errors. Fill it out correctly to see the success message!
6. **Scroll to Top:** If you are at the bottom of the page, click the floating `↑` button in the bottom right corner to smoothly scroll back to the top.

## 🖲️ Button Functionality

A comprehensive breakdown of the interactive buttons available throughout the website and their functionalities:

* **Toggle Dark Mode:** Located in the navigation bar. Switches the website's color scheme between the default light theme and a customized dark theme. Your preference is saved across visits using local storage.
* **Save Button:** Located in the hero section. Captures the name you enter in the input field, saves it locally, and updates the personalized greeting immediately.
* **Project Filter Buttons (All, Web, CLI, Infra):** Located in the Projects section. Clicking these buttons dynamically filters the project grid to display only the selected category without reloading the page.
* **View Code Links:** Located within the project cards. Acts as buttons that open a new tab directing you to the project's source code repository on GitHub.
* **Send Button:** Located in the Contact section. Submits the contact form. Upon clicking, it triggers client-side validation to ensure the email format is correct and the message meets length requirements.
* **Scroll to Top (↑):** A floating action button in the bottom right corner that appears after scrolling down. Clicking it smoothly animates the window scroll back to the very top of the page.

---

## 🤖 AI Usage Summary

Artificial Intelligence (Cursor, Gemini, ChatGPT) was utilized throughout the development process for structural setup, responsive CSS generation, and creating advanced logic like the Intersection Observer animations. 

All AI usage, including prompts, benefits, and my manual modifications, is thoroughly documented in the **[docs/ai-usage-report.md](docs/ai-usage-report.md)** file.

## 📚 Technical Documentation

For a deep dive into the architecture, CSS variables, and JavaScript modules used in this project, please refer to the **[docs/technical-documentation.md](docs/technical-documentation.md)** file.
