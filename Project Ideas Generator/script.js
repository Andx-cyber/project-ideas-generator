// Project Ideas Database
const projectIdeas = {
    beginner: {
        python: [
            {
                title: "Weather App",
                description: "Build a simple CLI application that fetches and displays current weather for a given location using a free weather API.",
                techStack: "Python, Requests library, JSON parsing",
                resourceLink: "https://realpython.com/python-requests/",
                difficulty: 1,
                duration: "short"
            },
            {
                title: "To-Do List Manager",
                description: "Create a command-line to-do list application that allows users to add, view, mark as done, and delete tasks.",
                techStack: "Python, File I/O, Basic data structures",
                resourceLink: null,
                difficulty: 1,
                duration: "short"
            },
            {
                title: "Password Generator",
                description: "Develop a tool that creates strong, random passwords with options for length and character types.",
                techStack: "Python, Random module, String manipulation",
                resourceLink: "https://docs.python.org/3/library/random.html",
                difficulty: 1,
                duration: "short"
            }
        ],
        javascript: [
            {
                title: "Interactive Quiz App",
                description: "Create a simple quiz with multiple-choice questions, score tracking, and immediate feedback.",
                techStack: "HTML, CSS, JavaScript, DOM manipulation",
                resourceLink: "https://www.w3schools.com/js/js_quiz.asp",
                difficulty: 1,
                duration: "medium"
            },
            {
                title: "To-Do List Web App",
                description: "Build a to-do list that stores tasks in local storage and allows users to add, complete, and delete tasks.",
                techStack: "HTML, CSS, JavaScript, localStorage API",
                resourceLink: null,
                difficulty: 1,
                duration: "short"
            },
            {
                title: "Digital Clock",
                description: "Create a real-time clock that updates every second with a clean, modern interface.",
                techStack: "HTML, CSS, JavaScript, Date object",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
                difficulty: 1,
                duration: "short"
            }
        ],
        htmlcss: [
            {
                title: "Personal Portfolio Website",
                description: "Create a simple portfolio site showcasing your projects and skills with responsive design.",
                techStack: "HTML, CSS, Flexbox/Grid",
                resourceLink: "https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/",
                difficulty: 1,
                duration: "medium"
            },
            {
                title: "Product Landing Page",
                description: "Design a landing page for a fictional product with clear call-to-action buttons and appealing visuals.",
                techStack: "HTML, CSS, Media queries",
                resourceLink: null,
                difficulty: 1,
                duration: "short"
            },
            {
                title: "Recipe Collection Site",
                description: "Build a simple site displaying your favorite recipes with nice formatting and images.",
                techStack: "HTML, CSS, Basic page layouts",
                resourceLink: null,
                difficulty: 1,
                duration: "short"
            }
        ],
        react: [
            {
                title: "Counter App",
                description: "Create a simple counter application with increment and decrement buttons to learn React state.",
                techStack: "React, useState hook",
                resourceLink: "https://react.dev/learn/state-a-components-memory",
                difficulty: 1,
                duration: "short"
            },
            {
                title: "Todo List",
                description: "Build a basic todo list that allows adding, completing, and deleting tasks.",
                techStack: "React, useState, conditional rendering",
                resourceLink: null,
                difficulty: 1,
                duration: "medium"
            },
            {
                title: "Profile Card",
                description: "Create a profile card component that displays user information in a styled card format.",
                techStack: "React, CSS-in-JS or CSS modules",
                resourceLink: null,
                difficulty: 1,
                duration: "short"
            }
        ],
        nodejs: [
            {
                title: "Command-Line Note Taking App",
                description: "Build a simple CLI app to create, read, and delete notes from the terminal.",
                techStack: "Node.js, File system module, Command-line arguments",
                resourceLink: "https://nodejs.org/api/fs.html",
                difficulty: 1,
                duration: "short"
            },
            {
                title: "URL Shortener CLI",
                description: "Create a command-line tool that shortens URLs using a third-party API.",
                techStack: "Node.js, HTTP requests, API integration",
                resourceLink: null,
                difficulty: 1,
                duration: "short"
            },
            {
                title: "Weather Reporter",
                description: "Build a command-line application that reports the current weather for a specified location.",
                techStack: "Node.js, Axios, Weather API",
                resourceLink: null,
                difficulty: 1,
                duration: "short"
            }
        ],
        cpp: [
            {
                title: "Simple Calculator",
                description: "Build a command-line calculator that can perform basic arithmetic operations.",
                techStack: "C++, Input/output streams, Control structures",
                resourceLink: "https://www.learncpp.com/",
                difficulty: 1,
                duration: "short"
            },
            {
                title: "Guess the Number Game",
                description: "Create a game where the user has to guess a randomly generated number with hints.",
                techStack: "C++, Random number generation, Conditional logic",
                resourceLink: null,
                difficulty: 1,
                duration: "short"
            },
            {
                title: "To-Do List Manager",
                description: "Develop a console application for managing daily tasks with add, view, and remove features.",
                techStack: "C++, File I/O, Basic data structures",
                resourceLink: null,
                difficulty: 1,
                duration: "medium"
            }
        ],
        aiml: [
            {
                title: "Sentiment Analysis Tool",
                description: "Build a simple tool that analyzes the sentiment of text input using pre-trained models.",
                techStack: "Python, NLTK or TextBlob",
                resourceLink: "https://www.nltk.org/howto/sentiment.html",
                difficulty: 1,
                duration: "medium"
            },
            {
                title: "Image Classifier",
                description: "Create an application that can classify images using a pre-trained model like MobileNet.",
                techStack: "Python, TensorFlow or PyTorch, Pre-trained models",
                resourceLink: "https://www.tensorflow.org/tutorials/images/classification",
                difficulty: 1,
                duration: "medium"
            },
            {
                title: "Chatbot with Rule-Based Responses",
                description: "Develop a simple chatbot that responds to user input based on predefined rules and patterns.",
                techStack: "Python, Regular expressions, Basic NLP concepts",
                resourceLink: null,
                difficulty: 1,
                duration: "short"
            }
        ]
    },
    intermediate: {
        python: [
            {
                title: "Personal Finance Tracker",
                description: "Build an application to track income, expenses, and visualize spending patterns with graphs.",
                techStack: "Python, SQLite, Pandas, Matplotlib/Plotly",
                resourceLink: "https://pandas.pydata.org/docs/user_guide/visualization.html",
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Web Scraper for Price Comparison",
                description: "Create a tool that scrapes product prices from different e-commerce sites and compares them.",
                techStack: "Python, BeautifulSoup/Scrapy, Pandas, Data visualization",
                resourceLink: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/",
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Automated File Organizer",
                description: "Develop a script that automatically organizes files in a directory based on file type, creation date, or custom rules.",
                techStack: "Python, OS module, File handling, Regular expressions",
                resourceLink: null,
                difficulty: 2,
                duration: "medium"
            }
        ],
        javascript: [
            {
                title: "Expense Tracker App",
                description: "Build a web application to track personal expenses with categories, charts, and filtering options.",
                techStack: "HTML, CSS, JavaScript, Chart.js, localStorage or IndexedDB",
                resourceLink: "https://www.chartjs.org/docs/latest/",
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Weather Dashboard",
                description: "Create a dashboard showing current weather and forecasts for multiple locations with data visualization.",
                techStack: "HTML, CSS, JavaScript, Fetch API, Weather API, Chart.js",
                resourceLink: null,
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Kanban Board",
                description: "Build a drag-and-drop kanban board for task management with columns for different status categories.",
                techStack: "HTML, CSS, JavaScript, Drag and Drop API, localStorage",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API",
                difficulty: 2,
                duration: "medium"
            }
        ],
        htmlcss: [
            {
                title: "E-commerce Product Page",
                description: "Design a responsive product page with image gallery, reviews section, and add-to-cart functionality.",
                techStack: "HTML, CSS, JavaScript (minimal), CSS Grid/Flexbox",
                resourceLink: null,
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Social Media Dashboard",
                description: "Create a dashboard UI for a social media platform with statistics, feed layouts, and responsive design.",
                techStack: "HTML, CSS, CSS custom properties, Advanced layouts",
                resourceLink: null,
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Portfolio with Animations",
                description: "Build a portfolio site with smooth scroll, CSS animations, and interactive elements.",
                techStack: "HTML, CSS, CSS animations, Intersection Observer API",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations",
                difficulty: 2,
                duration: "medium"
            }
        ],
        react: [
            {
                title: "E-commerce Product Page",
                description: "Build a single product page with image gallery, options selection, reviews, and add-to-cart functionality.",
                techStack: "React, React Hooks, Context API or Redux (optional)",
                resourceLink: "https://react.dev/learn/passing-data-deeply-with-context",
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Recipe Finder App",
                description: "Create an app that allows users to search for recipes based on ingredients, save favorites, and view detailed instructions.",
                techStack: "React, API integration, React Router, LocalStorage",
                resourceLink: null,
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Personal Dashboard",
                description: "Build a customizable dashboard with widgets for weather, tasks, notes, and other personal utilities.",
                techStack: "React, Context API, Local Storage, API integration",
                resourceLink: null,
                difficulty: 2,
                duration: "medium"
            }
        ],
        nodejs: [
            {
                title: "RESTful API for a Blog",
                description: "Create a complete REST API for a blog with posts, comments, and user authentication.",
                techStack: "Node.js, Express, MongoDB/SQL database, JWT authentication",
                resourceLink: "https://expressjs.com/en/guide/routing.html",
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Real-time Chat Application",
                description: "Build a chat application with real-time messaging using WebSockets.",
                techStack: "Node.js, Express, Socket.io, Basic front-end",
                resourceLink: "https://socket.io/get-started/chat",
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Task Scheduler Service",
                description: "Develop a service that can schedule and execute tasks at specified times or intervals.",
                techStack: "Node.js, Express, Cron jobs, Database for persistence",
                resourceLink: null,
                difficulty: 2,
                duration: "medium"
            }
        ],
        cpp: [
            {
                title: "File Compression Tool",
                description: "Create a program that compresses and decompresses files using algorithms like Huffman coding.",
                techStack: "C++, Binary file I/O, Data structures (trees), Algorithms",
                resourceLink: "https://en.cppreference.com/w/cpp/io/basic_fstream",
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Chess Game",
                description: "Implement a console-based chess game with proper move validation and basic AI opponent.",
                techStack: "C++, OOP, Game logic, Basic AI algorithms",
                resourceLink: null,
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Database Management System",
                description: "Build a simple DBMS that supports basic SQL-like queries and file-based storage.",
                techStack: "C++, File I/O, Data structures, Parsing",
                resourceLink: null,
                difficulty: 2,
                duration: "medium"
            }
        ],
        aiml: [
            {
                title: "Movie Recommendation System",
                description: "Build a recommendation system that suggests movies based on user preferences and viewing history.",
                techStack: "Python, Pandas, Scikit-learn, Collaborative filtering algorithms",
                resourceLink: "https://scikit-learn.org/stable/modules/classes.html#module-sklearn.neighbors",
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Text Summarization Tool",
                description: "Create an application that generates concise summaries of long articles or documents.",
                techStack: "Python, NLTK, Transformers library, Hugging Face models",
                resourceLink: "https://huggingface.co/docs/transformers/tasks/summarization",
                difficulty: 2,
                duration: "medium"
            },
            {
                title: "Facial Emotion Recognition",
                description: "Develop an application that can detect and classify emotions from facial expressions in images or video.",
                techStack: "Python, OpenCV, TensorFlow/PyTorch, Pre-trained models",
                resourceLink: null,
                difficulty: 2,
                duration: "medium"
            }
        ]
    },
    advanced: {
        python: [
            {
                title: "Automated Trading Bot",
                description: "Develop a bot that can analyze market trends and execute trades based on predefined strategies.",
                techStack: "Python, Pandas, NumPy, Trading API integration, Machine learning libraries",
                resourceLink: "https://www.alpaca.markets/docs/api-documentation/api-v2/",
                difficulty: 3,
                duration: "long"
            },
            {
                title: "Natural Language Processing Toolkit",
                description: "Build a comprehensive NLP toolkit that can perform sentiment analysis, entity recognition, summarization, and more.",
                techStack: "Python, NLTK, spaCy, Transformers, FastAPI/Flask",
                resourceLink: "https://spacy.io/usage/spacy-101",
                difficulty: 3,
                duration: "long"
            },
            {
                title: "Distributed Computing Framework",
                description: "Create a framework that can distribute computational tasks across multiple machines for parallel processing.",
                techStack: "Python, Socket programming, Multiprocessing, Redis/RabbitMQ",
                resourceLink: null,
                difficulty: 3,
                duration: "long"
            }
        ],
        javascript: [
            {
                title: "Real-time Collaborative Editor",
                description: "Build a web-based document editor that allows multiple users to edit simultaneously with conflict resolution.",
                techStack: "JavaScript, WebSockets, Operational Transformation algorithms, React/Vue",
                resourceLink: "https://operational-transformation.github.io/",
                difficulty: 3,
                duration: "long"
            },
            {
                title: "3D Interactive Data Visualization",
                description: "Create a tool for visualizing complex datasets in 3D with interactive elements and animations.",
                techStack: "JavaScript, Three.js/D3.js, WebGL, Data processing libraries",
                resourceLink: "https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene",
                difficulty: 3,
                duration: "long"
            },
            {
                title: "Progressive Web App with Offline Support",
                description: "Develop a full-featured PWA that works offline, syncs when online, and offers a native-like experience.",
                techStack: "JavaScript, Service Workers, IndexedDB, Push Notifications API, React/Vue",
                resourceLink: "https://web.dev/progressive-web-apps/",
                difficulty: 3,
                duration: "long"
            }
        ],
        htmlcss: [
            {
                title: "CSS Framework from Scratch",
                description: "Build your own CSS framework with a responsive grid system, components, and utilities.",
                techStack: "HTML, CSS, SASS/LESS, CSS Custom Properties, Documentation",
                resourceLink: "https://sass-lang.com/guide",
                difficulty: 3,
                duration: "long"
            },
            {
                title: "Interactive Magazine Layout",
                description: "Create a digital magazine with advanced layouts, animations, and interactive elements.",
                techStack: "HTML, CSS, JavaScript, CSS Grid, GSAP/Animation libraries",
                resourceLink: "https://greensock.com/docs/v3/GSAP",
                difficulty: 3,
                duration: "long"
            },
            {
                title: "CSS Art Gallery",
                description: "Build a collection of complex artwork created entirely with CSS, showcasing advanced techniques.",
                techStack: "HTML, CSS, CSS animations, CSS Shapes, CSS Filters",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shapes",
                difficulty: 3,
                duration: "medium"
            }
        ],
        react: [
            {
                title: "Full-Featured E-commerce Platform",
                description: "Build a complete e-commerce site with product listings, cart, checkout, user accounts, and admin dashboard.",
                techStack: "React, Redux Toolkit, React Router, Styled Components/MUI, Payment gateway integration",
                resourceLink: "https://redux-toolkit.js.org/introduction/getting-started",
                difficulty: 3,
                duration: "long"
            },
            {
                title: "Collaborative Project Management Tool",
                description: "Create a project management application with real-time updates, task assignment, progress tracking, and file sharing.",
                techStack: "React, TypeScript, GraphQL, WebSockets, Firebase/custom backend",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/react.html",
                difficulty: 3,
                duration: "long"
            },
            {
                title: "Video Conferencing Application",
                description: "Develop a video chat application with screen sharing, text chat, and room functionality.",
                techStack: "React, WebRTC, Socket.io, Media APIs, Redux",
                resourceLink: "https://webrtc.org/getting-started/overview",
                difficulty: 3,
                duration: "long"
            }
        ],
        nodejs: [
            {
                title: "Microservices Architecture",
                description: "Build a system of microservices that communicate with each other to form a complete application.",
                techStack: "Node.js, Express, Docker, Message queues, API Gateway, Multiple databases",
                resourceLink: "https://microservices.io/patterns/microservices.html",
                difficulty: 3,
                duration: "long"
            },
            {
                title: "Real-time Analytics Platform",
                description: "Create a platform that ingests, processes, and visualizes large volumes of data in real-time.",
                techStack: "Node.js, Express, WebSockets, Stream processing, Time-series database, Visualization libraries",
                resourceLink: null,
                difficulty: 3,
                duration: "long"
            },
            {
                title: "Content Management System",
                description: "Develop a full-featured CMS with content modeling, authoring, publishing workflows, and API access.",
                techStack: "Node.js, Express, GraphQL, MongoDB/PostgreSQL, React (front-end)",
                resourceLink: "https://graphql.org/learn/",
                difficulty: 3,
                duration: "long"
            }
        ],
        cpp: [
            {
                title: "Game Engine",
                description: "Build a 2D or 3D game engine with rendering, physics, audio, and scripting capabilities.",
                techStack: "C++, OpenGL/Vulkan, Physics libraries, Audio APIs, Scripting language integration",
                resourceLink: "https://www.opengl.org/sdk/docs/",
                difficulty: 3,
                duration: "long"
            },
            {
                title: "Database Engine",
                description: "Create a custom database engine with indexing, query optimization, and ACID compliance.",
                techStack: "C++, Advanced data structures, File I/O, Concurrency, Parser implementation",
                resourceLink: null,
                difficulty: 3,
                duration: "long"
            },
            {
                title: "Compiler or Interpreter",
                description: "Develop a compiler or interpreter for a programming language or domain-specific language.",
                techStack: "C++, Parsing techniques, AST, Code generation, Optimization techniques",
                resourceLink: "https://llvm.org/docs/",
                difficulty: 3,
                duration: "long"
            }
        ],
        aiml: [
            {
                title: "Autonomous Drone Navigation System",
                description: "Build a system that enables drones to navigate environments and avoid obstacles using computer vision.",
                techStack: "Python, PyTorch/TensorFlow, Computer Vision libraries, Reinforcement learning, Simulation tools",
                resourceLink: "https://www.tensorflow.org/agents",
                difficulty: 3,
                duration: "long"
            },
            {
                title: "Multimodal AI Assistant",
                description: "Create an assistant that can understand and generate text, images, and audio based on user prompts.",
                techStack: "Python, PyTorch/TensorFlow, Transformer models, GANs, Speech processing libraries",
                resourceLink: "https://huggingface.co/docs/transformers/main/en/tasks/multimodal",
                difficulty: 3,
                duration: "long"
            },
            {
                title: "Personalized Healthcare Recommendation System",
                description: "Develop a system that provides health recommendations based on personal data while ensuring privacy.",
                techStack: "Python, Machine learning frameworks, Federated learning, Differential privacy, Healthcare datasets",
                resourceLink: null,
                difficulty: 3,
                duration: "long"
            }
        ]
    }
};

// DOM Elements
const skillLevelSelect = document.getElementById('skillLevel');
const technologySelect = document.getElementById('technology');
const projectDurationSelect = document.getElementById('projectDuration');
const generateBtn = document.getElementById('generateBtn');
const resultSection = document.getElementById('resultSection');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('projectDescription');
const projectTechStack = document.getElementById('projectTechStack');
const resourceLinkContainer = document.getElementById('resourceLinkContainer');
const resourceLink = document.getElementById('resourceLink');
const newIdeaBtn = document.getElementById('newIdeaBtn');
const darkModeToggle = document.getElementById('darkModeToggle');
const ideaCount = document.getElementById('ideaCount');
const shareBtn = document.getElementById('shareBtn');
const shareModal = document.getElementById('shareModal');
const shareLink = document.getElementById('shareLink');
const copyBtn = document.getElementById('copyBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const projectDurationBadge = document.getElementById('projectDurationBadge');
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const searchResultsSection = document.getElementById('searchResultsSection');
const searchResults = document.getElementById('searchResults');
const favoriteBtn = document.getElementById('favoriteBtn');
const favoritesBtn = document.getElementById('favoritesBtn');
const favoritesSection = document.getElementById('favoritesSection');
const favoritesList = document.getElementById('favoritesList');
const clearFavoritesBtn = document.getElementById('clearFavoritesBtn');

// Global variable to store current idea
let currentIdea = null;
let favorites = [];

// Initialize favorites from localStorage
function loadFavorites() {
    const storedFavorites = localStorage.getItem('projectIdeasFavorites');
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
    }
}

// Save favorites to localStorage
function saveFavorites() {
    localStorage.setItem('projectIdeasFavorites', JSON.stringify(favorites));
}

// Count and display total number of project ideas
function countProjectIdeas() {
    let totalCount = 0;
    
    Object.keys(projectIdeas).forEach(level => {
        Object.keys(projectIdeas[level]).forEach(tech => {
            totalCount += projectIdeas[level][tech].length;
        });
    });
    
    ideaCount.textContent = totalCount;
    return totalCount;
}

// Initialize dark mode based on user preference or system setting
function initializeDarkMode() {
    // Check local storage first
    const storedDarkMode = localStorage.getItem('darkMode');
    
    if (storedDarkMode !== null) {
        // Apply saved preference
        document.documentElement.classList.toggle('dark', storedDarkMode === 'true');
    } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', prefersDark);
        localStorage.setItem('darkMode', prefersDark.toString());
    }
}

// Toggle dark mode
function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark.toString());
}

// Get duration text for display
function getDurationText(duration) {
    switch(duration) {
        case 'short':
            return 'Short (1-3 days)';
        case 'medium':
            return 'Medium (1-2 weeks)';
        case 'long':
            return 'Long (2+ weeks)';
        default:
            return 'Any Duration';
    }
}

// Update duration badge
function updateDurationBadge(duration) {
    projectDurationBadge.textContent = duration.charAt(0).toUpperCase() + duration.slice(1);
    
    // Update color based on duration
    projectDurationBadge.className = 'px-3 py-1 text-sm rounded-full';
    
    switch(duration) {
        case 'short':
            projectDurationBadge.classList.add('bg-green-100', 'dark:bg-green-900', 'text-green-800', 'dark:text-green-200');
            break;
        case 'medium':
            projectDurationBadge.classList.add('bg-blue-100', 'dark:bg-blue-900', 'text-blue-800', 'dark:text-blue-200');
            break;
        case 'long':
            projectDurationBadge.classList.add('bg-purple-100', 'dark:bg-purple-900', 'text-purple-800', 'dark:text-purple-200');
            break;
    }
}

// Update difficulty stars based on project difficulty
function updateDifficultyStars(difficulty) {
    // Reset stars
    star2.className = "text-gray-300 dark:text-gray-600 fas fa-star";
    star3.className = "text-gray-300 dark:text-gray-600 fas fa-star";
    
    // Update based on difficulty level
    if (difficulty >= 2) {
        star2.className = "text-yellow-400 fas fa-star";
    }
    
    if (difficulty >= 3) {
        star3.className = "text-yellow-400 fas fa-star";
    }
}

// Update favorite button state
function updateFavoriteButtonState() {
    if (!currentIdea) return;
    
    const isFavorite = favorites.some(fav => 
        fav.title === currentIdea.title && 
        fav.techStack === currentIdea.techStack
    );
    
    if (isFavorite) {
        favoriteBtn.innerHTML = '<i class="fas fa-heart mr-2"></i> Saved';
        favoriteBtn.classList.remove('bg-pink-100', 'dark:bg-pink-900', 'hover:bg-pink-200', 'dark:hover:bg-pink-800', 'text-pink-800', 'dark:text-pink-200');
        favoriteBtn.classList.add('bg-pink-500', 'hover:bg-pink-600', 'text-white');
    } else {
        favoriteBtn.innerHTML = '<i class="far fa-heart mr-2"></i> Save';
        favoriteBtn.classList.add('bg-pink-100', 'dark:bg-pink-900', 'hover:bg-pink-200', 'dark:hover:bg-pink-800', 'text-pink-800', 'dark:text-pink-200');
        favoriteBtn.classList.remove('bg-pink-500', 'hover:bg-pink-600', 'text-white');
    }
}

// Toggle favorite status of current idea
function toggleFavorite() {
    if (!currentIdea) return;
    
    const index = favorites.findIndex(fav => 
        fav.title === currentIdea.title && 
        fav.techStack === currentIdea.techStack
    );
    
    if (index === -1) {
        // Add to favorites
        favorites.push({...currentIdea, skillLevel: skillLevelSelect.value, technology: technologySelect.value});
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
    }
    
    saveFavorites();
    updateFavoriteButtonState();
    renderFavorites();
}

// Render favorites list
function renderFavorites() {
    favoritesList.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p class="text-gray-500 dark:text-gray-400 text-center py-4">No saved ideas yet. Click the heart icon to save ideas you like!</p>';
        return;
    }
    
    favorites.forEach((idea, index) => {
        const ideaElement = document.createElement('div');
        ideaElement.className = 'p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-750';
        
        ideaElement.innerHTML = `
            <div class="flex justify-between items-start">
                <h4 class="font-bold text-gray-800 dark:text-white">${idea.title}</h4>
                <div class="flex gap-2">
                    <button class="load-favorite text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300" data-index="${index}">
                        <i class="fas fa-arrow-right-to-bracket"></i>
                    </button>
                    <button class="remove-favorite text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300" data-index="${index}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">${idea.description}</p>
            <div class="flex justify-between items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                <span>
                    <i class="fas fa-code mr-1"></i> ${idea.technology}
                </span>
                <span>
                    <i class="fas fa-user-graduate mr-1"></i> ${idea.skillLevel.charAt(0).toUpperCase() + idea.skillLevel.slice(1)}
                </span>
                <span>
                    <i class="fas fa-clock mr-1"></i> ${idea.duration.charAt(0).toUpperCase() + idea.duration.slice(1)}
                </span>
            </div>
        `;
        
        favoritesList.appendChild(ideaElement);
    });
    
    // Add event listeners for load and remove buttons
    document.querySelectorAll('.load-favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            loadFavoriteIdea(index);
        });
    });
    
    document.querySelectorAll('.remove-favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            removeFavoriteIdea(index);
        });
    });
}

// Load a favorite idea
function loadFavoriteIdea(index) {
    const idea = favorites[index];
    
    // Set the select values
    skillLevelSelect.value = idea.skillLevel;
    technologySelect.value = idea.technology;
    
    // Set currentIdea and update UI
    currentIdea = idea;
    displayCurrentIdea();
    
    // Hide favorites section
    favoritesSection.classList.add('hidden');
}

// Remove a favorite idea
function removeFavoriteIdea(index) {
    favorites.splice(index, 1);
    saveFavorites();
    renderFavorites();
    
    // Update favorite button if current idea is showing
    if (currentIdea) {
        updateFavoriteButtonState();
    }
}

// Generate and display share link
function generateShareLink(idea) {
    const baseUrl = window.location.href.split('?')[0]; // Get base URL without parameters
    const params = new URLSearchParams();
    
    params.set('level', skillLevelSelect.value);
    params.set('tech', technologySelect.value);
    params.set('title', encodeURIComponent(idea.title));
    
    return `${baseUrl}?${params.toString()}`;
}

// Show sharing modal
function showShareModal() {
    if (!currentIdea) return;
    
    const shareUrl = generateShareLink(currentIdea);
    shareLink.value = shareUrl;
    shareModal.classList.remove('hidden');
}

// Copy share link to clipboard
function copyShareLink() {
    shareLink.select();
    document.execCommand('copy');
    
    // Show visual feedback
    copyBtn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => {
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    }, 2000);
}

// Close share modal
function closeShareModal() {
    shareModal.classList.add('hidden');
}

// Toggle search bar visibility
function toggleSearchBar() {
    searchBar.classList.toggle('hidden');
    searchResultsSection.classList.add('hidden');
    
    if (!searchBar.classList.contains('hidden')) {
        searchInput.focus();
    }
}

// Clear search input
function clearSearch() {
    searchInput.value = '';
    searchResultsSection.classList.add('hidden');
    searchInput.focus();
}

// Search for ideas
function searchIdeas() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        searchResultsSection.classList.add('hidden');
        return;
    }
    
    const results = [];
    
    // Search through all ideas
    Object.keys(projectIdeas).forEach(level => {
        Object.keys(projectIdeas[level]).forEach(tech => {
            projectIdeas[level][tech].forEach(idea => {
                // Search in title and description
                if (idea.title.toLowerCase().includes(query) || 
                    idea.description.toLowerCase().includes(query) ||
                    idea.techStack.toLowerCase().includes(query)) {
                    
                    results.push({
                        ...idea,
                        skillLevel: level,
                        technology: tech
                    });
                }
            });
        });
    });
    
    // Display results
    renderSearchResults(results);
}

// Render search results
function renderSearchResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400 py-4">No results found. Try different keywords.</p>';
    } else {
        results.forEach((idea, index) => {
            const resultElement = document.createElement('div');
            resultElement.className = 'p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer';
            resultElement.setAttribute('data-index', index);
            
            resultElement.innerHTML = `
                <h4 class="font-bold text-gray-800 dark:text-white">${idea.title}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">${idea.description}</p>
                <div class="flex justify-between items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>
                        <i class="fas fa-code mr-1"></i> ${idea.technology}
                    </span>
                    <span>
                        <i class="fas fa-user-graduate mr-1"></i> ${idea.skillLevel.charAt(0).toUpperCase() + idea.skillLevel.slice(1)}
                    </span>
                    <span>
                        <i class="fas fa-clock mr-1"></i> ${idea.duration.charAt(0).toUpperCase() + idea.duration.slice(1)}
                    </span>
                </div>
            `;
            
            // Add click event to load this idea
            resultElement.addEventListener('click', () => {
                loadSearchResult(idea);
            });
            
            searchResults.appendChild(resultElement);
        });
    }
    
    searchResultsSection.classList.remove('hidden');
}

// Load a search result
function loadSearchResult(idea) {
    // Set the select values
    skillLevelSelect.value = idea.skillLevel;
    technologySelect.value = idea.technology;
    
    // Set currentIdea and update UI
    currentIdea = idea;
    displayCurrentIdea();
    
    // Hide search results
    searchResultsSection.classList.add('hidden');
    searchBar.classList.add('hidden');
}

// Display current idea in the UI
function displayCurrentIdea() {
    if (!currentIdea) return;
    
    // Update the DOM with selected idea
    projectTitle.textContent = currentIdea.title;
    projectDescription.textContent = currentIdea.description;
    projectTechStack.textContent = currentIdea.techStack;
    
    // Update difficulty stars
    updateDifficultyStars(currentIdea.difficulty);
    
    // Update duration badge
    updateDurationBadge(currentIdea.duration);
    
    // Update favorite button
    updateFavoriteButtonState();
    
    // Handle resource link
    if (currentIdea.resourceLink) {
        resourceLink.href = currentIdea.resourceLink;
        resourceLinkContainer.classList.remove('hidden');
    } else {
        resourceLinkContainer.classList.add('hidden');
    }
    
    // Show the result section
    resultSection.classList.remove('hidden');
    resultSection.classList.add('animate-fade-in');
    
    // Scroll to result section
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Generate a random project idea based on selected filters
function generateIdea() {
    const skillLevel = skillLevelSelect.value;
    const technology = technologySelect.value;
    const duration = projectDurationSelect.value;
    
    // Get ideas matching the filters
    let ideasPool = projectIdeas[skillLevel][technology];
    
    // Filter by duration if specified
    if (duration !== 'any') {
        ideasPool = ideasPool.filter(idea => idea.duration === duration);
    }
    
    // Check if we have any ideas matching filters
    if (ideasPool.length === 0) {
        alert(`No ideas found for the selected filters. Please try different criteria.`);
        return;
    }
    
    // Select a random idea
    const randomIdx = Math.floor(Math.random() * ideasPool.length);
    currentIdea = ideasPool[randomIdx];
    
    // Display the idea
    displayCurrentIdea();
}

// Check URL for shared project idea
function checkForSharedIdea() {
    const params = new URLSearchParams(window.location.search);
    
    if (params.has('level') && params.has('tech') && params.has('title')) {
        const level = params.get('level');
        const tech = params.get('tech');
        const sharedTitle = decodeURIComponent(params.get('title'));
        
        // Set the select values
        if (skillLevelSelect.querySelector(`option[value="${level}"]`)) {
            skillLevelSelect.value = level;
        }
        
        if (technologySelect.querySelector(`option[value="${tech}"]`)) {
            technologySelect.value = tech;
        }
        
        // Find the specific project
        const ideasPool = projectIdeas[level]?.[tech] || [];
        const sharedIdea = ideasPool.find(idea => idea.title === sharedTitle);
        
        if (sharedIdea) {
            currentIdea = sharedIdea;
            displayCurrentIdea();
        }
    }
}

// Toggle favorites section
function toggleFavoritesSection() {
    // Hide other sections
    searchBar.classList.add('hidden');
    searchResultsSection.classList.add('hidden');
    
    // Toggle favorites section
    favoritesSection.classList.toggle('hidden');
    
    // Render favorites if visible
    if (!favoritesSection.classList.contains('hidden')) {
        renderFavorites();
        
        // Scroll to favorites section
        favoritesSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Clear all favorites
function clearAllFavorites() {
    if (confirm('Are you sure you want to clear all saved ideas?')) {
        favorites = [];
        saveFavorites();
        renderFavorites();
        updateFavoriteButtonState();
    }
}

// Add CSS for line clamping
document.head.insertAdjacentHTML('beforeend', `
<style>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
`);

// Event Listeners
generateBtn.addEventListener('click', generateIdea);
newIdeaBtn.addEventListener('click', generateIdea);
darkModeToggle.addEventListener('click', toggleDarkMode);
shareBtn.addEventListener('click', showShareModal);
copyBtn.addEventListener('click', copyShareLink);
closeModalBtn.addEventListener('click', closeShareModal);
searchToggle.addEventListener('click', toggleSearchBar);
clearSearchBtn.addEventListener('click', clearSearch);
searchInput.addEventListener('input', searchIdeas);
favoriteBtn.addEventListener('click', toggleFavorite);
favoritesBtn.addEventListener('click', toggleFavoritesSection);
clearFavoritesBtn.addEventListener('click', clearAllFavorites);

// Close modal when clicking outside the modal content
shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
        closeShareModal();
    }
});

// Add an animation class for fade-in effect
document.head.insertAdjacentHTML('beforeend', `
<style>
.animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
`);

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    countProjectIdeas();
    loadFavorites();
    checkForSharedIdea();
}); 