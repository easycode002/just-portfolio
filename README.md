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
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
    plugins: [],
  };
  ```

### Custome OutDir in nextjs
```sh
// next.config.ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  distDir: "build",
};
export default nextConfig;
```

### Custome alias path
```sh
// tsconfig.json
{
  "compilerOptions": {
    ...
    "baseUrl": ".",  // Base URL for resolving modules
    "paths": {
      "@/*": ["./*"],  
      "@components/*": ["./app/components/*"], 
      "@utils/*": ["./utils/*"]
    }
  },
  ...
  "exclude": [
    "node_modules"
  ]
}
```