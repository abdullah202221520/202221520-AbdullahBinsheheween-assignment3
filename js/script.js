// ====== State Management: Dark Mode ======
function darkModeToggle() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// ====== Helper: Time of Day Greeting ======
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (!greetingElement) return;

    const hour = new Date().getHours();
    let message = "Good evening";
    if (hour < 12) {
        message = "Good morning";
    } else if (hour < 18) {
        message = "Good afternoon";
    }
    greetingElement.textContent = `${message}, Welcome to My Portfolio`;
}

// ====== State Management: Visitor Name ======
function loadVisitorName() {
    const storedName = localStorage.getItem('visitorName');
    const nameDisplay = document.getElementById('visitor-name-display');
    const formContainer = document.getElementById('name-form-container');

    if (storedName) {
        if (nameDisplay) nameDisplay.textContent = ` ${storedName}`;
        if (formContainer) formContainer.style.display = 'none'; // Hide prompt if name known
    }
}

function saveVisitorName() {
    const nameInput = document.getElementById('visitor-name-input');
    const name = nameInput.value.trim();

    if (name) {
        localStorage.setItem('visitorName', name);
        loadVisitorName(); // update display
    }
}

// ====== Complex Logic: Filtering ======
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('#projects .project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = 'flex'; // show
                } else {
                    card.style.display = 'none'; // hide
                }
            });
        });
    });
}

// ====== API Integration: GitHub Repos ======
async function fetchGitHubProjects() {
    const githubContainer = document.getElementById('github-repos');
    if (!githubContainer) return;

    const username = 'abdullah202221520';
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`);
        if (!response.ok) {
            throw new Error(`GitHub API returned status ${response.status}`);
        }
        const data = await response.json();
        
        // Clear loading text
        githubContainer.innerHTML = '';
        
        if (data.length === 0) {
            githubContainer.innerHTML = '<p>No repositories found.</p>';
            return;
        }

        data.forEach(repo => {
            const card = document.createElement('div');
            card.classList.add('project-card');
            
            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available for this repository.'}</p>
                <div style="margin-top: auto; padding-top: 15px;">
                    <a href="${repo.html_url}" target="_blank" style="text-decoration:none; color: #fff; background-color:#333; padding: 5px 10px; border-radius: 4px; display:inline-block; font-size:0.9rem;">View Code</a>
                </div>
            `;
            githubContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching GitHub projects:", error);
        githubContainer.innerHTML = '<p style="color: red;">Failed to load GitHub projects. Please try again later.</p>';
    }
}

// ====== Complex Logic: Form Validation ======
function setupFormValidation() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual submission
        
        const emailInput = document.getElementById('email').value;
        const nameInput = document.getElementById('name').value;
        const messageInput = document.getElementById('message').value;

        // Basic Regex checks
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
        
        if (!emailValid) {
            feedback.textContent = 'Please enter a valid email address.';
            feedback.style.color = '#ff4444';
            return;
        }

        if (nameInput.trim().length < 2) {
            feedback.textContent = 'Name must be at least 2 characters.';
            feedback.style.color = '#ff4444';
            return;
        }

        if (messageInput.trim().length < 10) {
            feedback.textContent = 'Message must be at least 10 characters long.';
            feedback.style.color = '#ff4444';
            return;
        }

        // Success state
        feedback.textContent = 'Message sent successfully! (Simulated)';
        feedback.style.color = '#00C851';
        
        // Also save name as visitor if not already saved
        if (!localStorage.getItem('visitorName')) {
            localStorage.setItem('visitorName', nameInput.trim());
            loadVisitorName();
        }

        form.reset(); // clear form
    });
}

// ====== Scroll Animations ======
function setupScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => observer.observe(el));
}

// ====== Typing Effect ======
function setupTypingEffect() {
    const container = document.getElementById('typing-text');
    if (!container) return;
    
    const words = ["Computer Science Student", "Passionate Programmer", "Tech Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            container.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            container.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at the end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before new word
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start typing effect
    setTimeout(type, 1000);
}

// ====== Scroll to Top Button ======
function setupScrollToTop() {
    const topBtn = document.getElementById('scrollToTopBtn');
    if (!topBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topBtn.classList.add('show');
        } else {
            topBtn.classList.remove('show');
        }
    });
    
    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ====== On Document Load Initialization ======
document.addEventListener('DOMContentLoaded', function () {
    // 1. Initialize Theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // 2. Setup Greeting and Visitor Name
    setGreeting();
    loadVisitorName();

    // 3. Setup Logic modules
    setupFilters();
    fetchGitHubProjects();
    setupFormValidation();
    setupScrollAnimations();
    setupTypingEffect();
    setupScrollToTop();

    // 4. Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});