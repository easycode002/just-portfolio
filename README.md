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
      ...
      "lib": [
        "dom",
        "dom.iterable",
        "esnext"
      ],
      "plugins": [
        {
          "name": "next"
        }
      ],
      "baseUrl": ".",
      "paths": {
        "@/*": ["./*"],
        "@components/*": ["./app/components/*"],
        "@utils/*": ["./utils/*"]
      }
    },
    "include": [
      "**/*.ts",
      "**/*.tsx",
      ".next/types/**/*.ts",
      "next-env.d.ts",
      "build/types/**/*.ts"
    ],
    "exclude": [
      "node_modules"
    ]
    }
    ```