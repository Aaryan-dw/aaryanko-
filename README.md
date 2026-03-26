```markdown
# Aaryan Koirala Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS.

## 🚀 Live Demo
[Visit Portfolio](https://aaryankoirala.com.np)

## ✨ Features
- Modern dark theme design
- Fully responsive layout
- Smooth scroll animations
- Project showcase with GitHub links
- Contact form integrated with Google Forms
- Downloadable CV
- Mobile-friendly navigation

## 🛠️ Tech Stack
- **React** - Frontend library
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Font Awesome** - Icons

## 📋 Prerequisites
Make sure you have the following installed:
- Node.js (v16 or higher)
- npm (Node Package Manager)

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Aaryan-dw/aaryanko-.git
cd aaryanko-
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
The website will open at `http://localhost:3000`

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

## 📁 Project Structure
```
aaryanko-/
├── public/
│   └── koiralaAaryan.pdf          # CV file
├── src/
│   ├── components/
│   │   ├── navbar.jsx              # Navigation bar
│   │   ├── herosection.jsx         # Hero section
│   │   └── footer.jsx              # Footer
│   ├── pages/
│   │   ├── about.jsx               # About page
│   │   ├── projects.jsx            # Projects showcase
│   │   ├── skills.jsx              # Skills section
│   │   └── contact.jsx             # Contact form
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information
1. Edit `src/components/herosection.jsx` - Update name, title, location
2. Edit `src/pages/about.jsx` - Update about me text
3. Edit `src/pages/skills.jsx` - Update skills data
4. Edit `src/pages/projects.jsx` - Update projects data

### Update CV
Replace `public/koiralaAaryan.pdf` with your own CV file

### Update Social Links
Edit the links in:
- `src/components/navbar.jsx` (GitHub, LinkedIn)
- `src/components/footer.jsx` (Social icons)

### Update Contact Form
The contact form uses Google Forms. To use your own form:
1. Create a Google Form
2. Get the form action URL
3. Update the `action` attribute in `src/pages/contact.jsx`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import repository to [Vercel](https://vercel.com)
3. Default settings work perfectly
4. Your site will be live in seconds

### Deploy to Netlify
1. Push to GitHub
2. Import to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📄 License
MIT License

## 👨‍💻 Author
**Aaryan Koirala**
- GitHub: [@Aaryan-dw](https://github.com/Aaryan-dw)
- LinkedIn: [Aaryan Koirala](https://linkedin.com/in/aaryan69koirala)

## 🙏 Acknowledgments
- Design inspiration from modern portfolio trends
- Icons by Font Awesome
- Built with React and Tailwind CSS

---

⭐ Star this repository if you found it helpful!
```

## 📋 **Quick Setup Commands for Users**

When someone clones your repository, they just need to run:

```bash
# Clone the repository
git clone https://github.com/Aaryan-dw/aaryanko-.git
cd aaryanko-

# Install dependencies
npm install

# Run the project
npm run dev
```

## 🔧 **package.json** (Ensure this is in your repo)

```json
{
  "name": "aaryan-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.0"
  }
}
```

## 💡 **What Users Need to Know**

1. **Node.js required** - They need Node.js installed (v16+)
2. **One command install** - `npm install` installs everything
3. **No extra configuration** - All config files are included
4. **Works out of the box** - Just clone and run

## 🚨 **Common Issues & Solutions**

### Issue: "Cannot find module"
```bash
# Solution: Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind styles not working
```bash
# Solution: Restart dev server
npm run dev
```

### Issue: Port already in use
```bash
# Solution: Change port in vite.config.js
server: {
  port: 3001,  // Change to different port
  open: true
}
```
