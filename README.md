# Profolio 🖥️

A stunning macOS-inspired portfolio website built with modern web technologies. Experience a desktop-like interface with draggable windows, smooth animations, and an immersive user experience that showcases your professional journey.

![Profolio Preview](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Profolio+Preview)

## ✨ Features

### 🎨 Immersive macOS Interface
- **Desktop Environment**: Authentic macOS desktop experience with dock, menu bar, and window management
- **Draggable Windows**: Interactive windows that can be moved, minimized, and closed just like on macOS
- **Smooth Animations**: Powered by GSAP for buttery-smooth transitions and interactions

### 🛠️ Interactive Applications
- **Terminal Window**: A functional terminal interface for showcasing your command-line skills
- **Safari Browser**: Built-in browser window for displaying web projects and links
- **Resume Viewer**: PDF viewer with download functionality for your resume/CV

### 🚀 Modern Tech Stack
- **React 19**: Latest React with concurrent features and performance optimizations
- **Vite**: Lightning-fast build tool with HMR (Hot Module Replacement)
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **GSAP**: Professional-grade animation library for complex animations
- **Zustand**: Lightweight state management with a simple API
- **React PDF**: Seamless PDF viewing and interaction

## 🏗️ Architecture

```
src/
├── components/          # Reusable UI components
│   ├── Dock.jsx        # macOS-style dock with app icons
│   ├── Navbar.jsx      # Top menu bar
│   ├── Welcome.jsx     # Welcome screen/landing
│   └── WindowControls.jsx # Window management controls
├── windows/            # Application windows
│   ├── Terminal.jsx    # Terminal emulator
│   ├── Safari.jsx      # Web browser window
│   └── Resume.jsx      # PDF resume viewer
├── store/              # State management
├── hoc/                # Higher-order components
└── constants/          # App constants and configurations
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/profolio.git
   cd profolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see your portfolio in action!

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🎯 Usage

### Adding Your Content

1. **Resume**: Place your resume PDF in `public/files/resume.pdf`
2. **Projects**: Update the Safari window to link to your projects
3. **Terminal Commands**: Customize the terminal with your own commands and responses
4. **Styling**: Modify Tailwind classes and GSAP animations to match your brand

### Customization

The app uses a modular component structure, making it easy to:
- Add new windows/applications
- Modify the dock icons and layout
- Customize animations and transitions
- Update the color scheme and theming

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Key Technologies Explained

- **GSAP Draggable**: Enables smooth window dragging with momentum and bounds
- **React PDF**: Renders PDF documents directly in the browser
- **Zustand Store**: Manages window states (minimized, maximized, position)
- **Tailwind CSS**: Provides consistent spacing, colors, and responsive design
- **Vite Plugins**: Optimizes React and Tailwind for development and production

## 🌟 Highlights

- **Performance Optimized**: Built with Vite for sub-second reloads
- **Responsive Design**: Adapts beautifully to different screen sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Modern JavaScript**: ES6+ features with clean, maintainable code
- **Type Safety**: TypeScript-ready with proper prop types

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by macOS interface design
- Built with love using React and modern web technologies
- Special thanks to the open-source community

---

**Made with ❤️ by Arham Ahmed**

*Show off your skills with style!*
