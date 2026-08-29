# Intan Nur Habriah — Portfolio
Bold brutalist design: cream background, yellow hero, pink accents. React + Tailwind CSS.

## 🖼️ Add Your Photo
Put your photo in `/public/photo.jpg`, then in `src/components/Hero.jsx` replace the placeholder with:
```jsx
<img src="/photo.jpg" alt="Intan" className="w-full h-full object-cover" />
```

## 🚀 Deploy (Step by Step)

### 1. Install Node.js — https://nodejs.org (LTS version)

### 2. Test locally
```bash
cd portfolio
npm install
npm start
```
### 3. Push to GitHub
Create a new repo at https://github.com/new (Public), then:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/intanhbrh/portfolio.git
git push -u origin main
```

### 4. Deploy on Vercel
1. https://vercel.com → sign in with GitHub
2. Add New → Project → select your repo
3. Deploy ✅  (~1 min, auto-redeploys on every push)
