# 💡 Project Ideas Generator

A responsive web application that helps programmers find new project ideas based on their skill level and preferred technology stack. This tool is designed to inspire developers when they're looking for their next coding challenge.

## Features

- Filter project ideas by:
  - Skill Level (Beginner, Intermediate, Advanced)
  - Technology (Python, JavaScript, HTML/CSS, React, Node.js, C++, AI/ML)
  - Project Duration (Short, Medium, Long)
- Search functionality to find specific project ideas
- Save favorite ideas for later reference
- Get randomized project ideas based on selected filters
- Each idea includes:
  - Project title
  - Detailed description
  - Recommended tech stack
  - Resource links (when available)
  - Difficulty rating visualization
  - Estimated project duration
- Dark mode support with system preference detection
- Fully responsive design (works on mobile and desktop)
- Share functionality to send specific project ideas to others
- Total project idea counter
- Animated UI elements for better user experience
- Local storage for saving preferences and favorites

## Technologies Used

- HTML5
- TailwindCSS
- Vanilla JavaScript (no frameworks or libraries)
- Font Awesome icons
- LocalStorage API



## Local Setup

1. Clone this repository:
```
git clone https://github.com/Andx-cyber/project-ideas-generator.git
```

2. Open the `index.html` file in your browser:
```
cd project-ideas-generator
open index.html  # On macOS
# or
start index.html  # On Windows
```

## Project Structure

- `index.html` - Main HTML structure
- `tailwind.config.js` - Tailwind CSS configuration
- `script.js` - JavaScript logic and project ideas database

## Key Features

### Search Functionality
Use the search bar to quickly find projects by keywords in titles, descriptions, or tech stacks.

### Favorites System
Save project ideas you like for future reference. Your favorites are stored locally on your device.

### Duration Filtering
Filter ideas by project duration to find projects that fit your available time:
- Short (1-3 days)
- Medium (1-2 weeks)
- Long (2+ weeks)

### Sharing Features
Share specific project ideas with others by using the "Share" button. This generates a unique URL that, when opened, will display the exact same project idea. Great for teams or study groups!

## Deployment

This project can be easily deployed on GitHub Pages or any static site hosting service as it uses only client-side technologies.

## Future Improvements

- Add more project ideas to the database
- Allow users to submit their own project ideas
- Implement custom categories and tags
- Add project complexity metrics
- Create user accounts for cross-device sync
- Implement a voting system for popular ideas
- Add export functionality (PDF, markdown)

## Contributing

Feel free to fork this repository and add your own project ideas or improvements to the UI.

## License

MIT License Andx
