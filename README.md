# GitHub Portfolio Website

A clean, modern, and professional GitHub portfolio website built with pure HTML, CSS, and JavaScript. Automatically fetches and displays all your public repositories from GitHub.

## 📋 Features

✅ **Automatic Repository Fetching** - Uses GitHub REST API to fetch all public repositories  
✅ **Dark Professional Theme** - Modern, corporate dark theme optimized for developers  
✅ **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices  
✅ **No Dependencies** - Pure vanilla HTML, CSS, and JavaScript (no frameworks)  
✅ **Smooth Animations** - Hover effects and transitions for better UX  
✅ **SEO Friendly** - Proper semantic HTML structure  
✅ **Accessibility** - Built with accessibility best practices in mind  
✅ **Interview Ready** - Clean, well-commented, and easy to explain  

## 📁 Project Structure

```
Port/
├── index.html      # Main HTML file with structure
├── styles.css      # All CSS styling and responsive design
├── script.js       # JavaScript for fetching GitHub API data
└── README.md       # This file
```

## 🚀 Quick Start

### Installation & Setup

1. **Download/Clone the Project**
   ```bash
   # If you have git
   git clone <your-repo-url>
   
   # Or simply extract the folder
   ```

2. **Update GitHub Username** (if needed)
   - Open `script.js`
   - Find line: `githubUsername: 'varshith3555',`
   - Replace `varshith3555` with your GitHub username

3. **Run the Website**
   - **Option A:** Double-click `index.html` in your file explorer
   - **Option B:** Use a local server (recommended)
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```
   - Open `http://localhost:8000` in your browser

4. **Customize Contact Links** (Optional)
   - Edit `index.html` and update:
     - LinkedIn URL (line 27)
     - Email address (line 28)

## 🎨 Customization Guide

### Change Accent Color
Edit `styles.css` in the `:root` section:
```css
:root {
    --accent-color: #00d4ff;  /* Change this to your preferred color */
    /* ... */
}
```

### Modify Hero Section Text
Edit `index.html` lines 29-31:
```html
<h1>GitHub Portfolio</h1>
<p>Showcasing my projects and contributions</p>
```

### Update Personal Information
1. **Name:** Line 18 in `index.html` (navbar logo)
2. **Page Title:** Line 6 in `index.html`
3. **Navigation Links:** Lines 26-28 in `index.html`
4. **Footer:** Lines 59-61 in `index.html`

### Add Custom Favicon
1. Create a `favicon.ico` file in the project folder
2. Add this line to `index.html` in the `<head>`:
   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon">
   ```

## 📊 What Gets Displayed

For each repository, the website automatically shows:
- ✅ Repository name
- ✅ Repository description
- ✅ Primary programming language
- ✅ Link to GitHub repository
- ❌ Stars/Forks (not included per requirements)

## 🔧 How the GitHub API Integration Works

### API Endpoint Used
```
GET https://api.github.com/users/{username}/repos
```

### Query Parameters
- `sort=updated` - Sort by most recently updated
- `direction=desc` - Descending order (newest first)
- `per_page=100` - Maximum 100 repos per page

### Rate Limiting
- **Unauthenticated:** 60 requests/hour
- **Authenticated:** 5,000 requests/hour (optional)

To use authentication:
1. Create a GitHub Personal Access Token (no scopes needed for public data)
2. Modify `script.js` line 31:
   ```javascript
   const headers = {
       'Authorization': 'token YOUR_TOKEN_HERE'
   };
   const response = await fetch(apiUrl, { headers });
   ```

## 💻 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px to 1199px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## 🎯 Interview Talking Points

### Code Quality
- "Well-organized with clear separation of concerns (HTML/CSS/JS)"
- "Comprehensive CSS variables for easy theming"
- "Proper error handling and loading states"
- "Semantic HTML for better accessibility"

### Architecture
- "Vanilla JavaScript for better performance"
- "Modular functions for scalability"
- "Responsive grid layout using CSS Grid"
- "Mobile-first design approach"

### Features
- "Real-time data from GitHub API"
- "Smooth animations and transitions"
- "Dark theme optimized for developer audience"
- "Fully responsive on all devices"

## 🔐 Performance & Security

- **No external dependencies** - Faster loading
- **No localStorage of sensitive data** - API calls only
- **CORS-friendly** - Works with public GitHub API
- **Optimized CSS** - Minimal file size
- **Vanilla JS** - No framework overhead

## 🐛 Troubleshooting

### "No repositories found" error
- Ensure your GitHub account has public repositories
- Check that your username in `script.js` is correct
- GitHub accounts created very recently may have no public repos yet

### CORS Error
- This shouldn't happen with the public GitHub API
- Ensure your browser isn't blocking the API request
- Check browser console (F12) for detailed error messages

### Cards not displaying properly
- Clear your browser cache (Ctrl+Shift+Delete)
- Try a different browser to rule out browser-specific issues
- Check that all three files (HTML, CSS, JS) are in the same folder

### Slow loading
- This is normal for the first load (GitHub API call)
- Subsequent loads should be instant
- Consider adding caching logic if reloading frequently

## 📈 Future Enhancement Ideas

1. Add pagination for users with 100+ repositories
2. Implement search/filter functionality
3. Add GitHub contributions graph
4. Display starred repositories from others
5. Add dark/light theme toggle
6. Implement local caching with localStorage
7. Add deployment status indicators
8. Show recently pushed repositories

## 📝 License

Feel free to use this project for your portfolio. No attribution required, but appreciated!

## 👨‍💼 About

Built as a professional portfolio showcase tool for developers. Perfect for:
- College placements
- Job interviews
- Training reviews
- Professional networking
- Recruiting showcases

---

**Last Updated:** February 2026  
**Version:** 1.0.0  
**Author:** Generated for Portfolio Showcase
