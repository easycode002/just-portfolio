# Sothea Mab
### Setup nextjs project
```sh
bun create next-app
```

### Install and config tailwindcss for nextjs
 - Install tailwindcss
   ```sh
   bun add tailwindcss postcss autoprefixer
   ```
 - Generate TailwindCSS and Config file
   ```sh
   npx tailwindcss init -p
   ```
 - Config `tailwindcss.config.js`
   ```sh
   /** @type {import('tailwindcss').Config} */
   module.exports = {
   content: [
     "./pages/**/*.{js,ts,jsx,tsx}",
     "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
     extend: {},
   },
     plugins: [],
   };
   ```