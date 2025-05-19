# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio template is designed to showcase your work and skills in a professional manner.

## Features

- Responsive design that works on all devices
- Modern and clean UI
- Smooth scrolling navigation
- Animated typing effect
- Mobile-friendly navigation menu
- Contact form
- Project showcase section
- Skills display
- Social media links
- Scroll to top button

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser to view the website
3. Customize the content to make it your own

## Customization

### Personal Information
Edit the following in `index.html`:
- Your name in the navigation bar and hero section
- About section content
- Contact information
- Social media links in the footer

### Projects
Add your projects in the projects section of `index.html`:
```html
<div class="project-card">
    <div class="project-image">
        <img src="path-to-your-project-image" alt="Project Title">
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Project description goes here.</p>
        <div class="project-links">
            <a href="#" class="btn">View Live</a>
            <a href="#" class="btn">Source Code</a>
        </div>
    </div>
</div>
```

### Skills
Add or modify skills in the skills section of `index.html`:
```html
<div class="skill-card">
    <i class="fab fa-your-icon"></i>
    <h3>Skill Name</h3>
</div>
```

### Colors
Modify the color scheme in `styles.css` by changing the CSS variables in the `:root` selector:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --text-color: #your-color;
    --light-text: #your-color;
    --background: #your-color;
    --section-bg: #your-color;
}
```

### Typing Animation
Modify the typing animation text in `script.js`:
```javascript
const textArray = ["Your Text 1", "Your Text 2", "Your Text 3"];
```

## Contact Form

The contact form is currently set up to log form submissions to the console. To make it functional:

1. Set up a backend server to handle form submissions
2. Modify the form submission code in `script.js` to send data to your server
3. Add proper form validation and error handling

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the MIT License.

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Placeholder.com for placeholder images 