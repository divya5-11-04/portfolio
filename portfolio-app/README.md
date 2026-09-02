# Divya Monga - Portfolio Website# React + TypeScript + Vite



A fully responsive and immersive personal portfolio website built with React, TailwindCSS, and Framer Motion.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## 🌟 FeaturesCurrently, two official plugins are available:



- **Futuristic AI-driven Design**: Dark mode with glowing neon accents (purple and cyan tones)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **Smooth Animations**: Powered by Framer Motion with parallax effects- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Fully Responsive**: Optimized for all screen sizes

- **Interactive Sections**:## React Compiler

  - Hero with animated neural network particles

  - About with animated skill badgesThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

  - Education timeline

  - Experience cards with hover effects## Expanding the ESLint configuration

  - Projects gallery with tech stack display

  - Animated skills cloud with category filtersIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

  - Achievement badges with 3D effects

  - Contact form with EmailJS integration```js

  - AI Chatbot widgetexport default defineConfig([

  globalIgnores(['dist']),

## 🚀 Getting Started  {

    files: ['**/*.{ts,tsx}'],

### Prerequisites    extends: [

      // Other configs...

- Node.js (v16 or higher)

- npm or yarn      // Remove tseslint.configs.recommended and replace with this

      tseslint.configs.recommendedTypeChecked,

### Installation      // Alternatively, use this for stricter rules

      tseslint.configs.strictTypeChecked,

1. Navigate to the project directory:      // Optionally, add this for stylistic rules

```bash      tseslint.configs.stylisticTypeChecked,

cd portfolio-app

```      // Other configs...

    ],

2. Install dependencies (already done):    languageOptions: {

```bash      parserOptions: {

npm install        project: ['./tsconfig.node.json', './tsconfig.app.json'],

```        tsconfigRootDir: import.meta.dirname,

      },

3. Start the development server:      // other options...

```bash    },

npm run dev  },

```])

```

4. Open your browser and visit: `http://localhost:5173`

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

## 📧 EmailJS Configuration

```js

To enable the contact form, you need to configure EmailJS:// eslint.config.js

import reactX from 'eslint-plugin-react-x'

1. Sign up at [EmailJS](https://www.emailjs.com/)import reactDom from 'eslint-plugin-react-dom'

2. Create an email service

3. Create an email templateexport default defineConfig([

4. Copy your credentials  globalIgnores(['dist']),

5. Update `src/components/Contact.jsx` with your credentials:  {

   - `YOUR_SERVICE_ID`    files: ['**/*.{ts,tsx}'],

   - `YOUR_TEMPLATE_ID`    extends: [

   - `YOUR_PUBLIC_KEY`      // Other configs...

      // Enable lint rules for React

## 🛠️ Built With      reactX.configs['recommended-typescript'],

      // Enable lint rules for React DOM

- **React** - JavaScript library for building user interfaces      reactDom.configs.recommended,

- **Vite** - Next generation frontend tooling    ],

- **TailwindCSS** - Utility-first CSS framework    languageOptions: {

- **Framer Motion** - Animation library for React      parserOptions: {

- **EmailJS** - Email service for contact forms        project: ['./tsconfig.node.json', './tsconfig.app.json'],

- **React Icons** - Icon library        tsconfigRootDir: import.meta.dirname,

      },

## 📁 Project Structure      // other options...

    },

```  },

portfolio-app/])

├── src/```

│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Chatbot.jsx
│   ├── data/
│   │   └── portfolio.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── tailwind.config.js
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.json` to update your information.

### Modify Colors

Edit `tailwind.config.js` to change the color scheme.

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Deploy the `dist` folder to Vercel, Netlify, or any hosting service.

## 👤 Author

**Divya Monga**
- Email: ddivya.officially@gmail.com
- LinkedIn: [divya-ji4](https://linkedin.com/in/divya-ji4)
