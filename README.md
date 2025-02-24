# 🚀 Next.js Starter Template

This **Next.js 15** starter template is designed for modern web development with a focus on **performance, scalability, and best practices**. It includes essential tools for UI, state management, testing, translations, deployment, and more.

---

## Table of Contents

1. [Technologies & Tools Used](#-technologies--tools-used)
2. [Setting Up Git](#-setting-up-git)
3. [Customization](#-customization)
   - [Updating the Favicon](#-updating-the-favicon)
   - [Using Lucide Icons](#-using-lucide-icons)
   - [Styling & Theming](#-styling-&-theming)
4. [Installation & Setup](#-installation-&-setup)

---

## 🛠 Technologies & Tools Used

### **FrontendV Framework**

- **[Next.js 15](https://nextjs.org/docs)** – React-based framework for SSR, ISR, and static generation.

### **UI Library**

- **[Mantine](https://mantine.dev/)** – Component-rich UI library with built-in **dark/light mode** and **RTL support**.

### **State Management**

- **[Redux](https://redux.js.org/usage/nextjs)** – Centralized state management for predictable state updates.

### **Forms & Validation**

- **[Mantine Form](https://mantine.dev/form/schema-validation/)** – Schema-based validation with Zod/Yup.

### **API Calls**

- **[Axios](https://www.npmjs.com/package/axios)** – Promise-based HTTP client for API integration.

### **Testing**

- **[Cypress](https://www.cypress.io/)** – End-to-end testing framework. _(Currently needs further testing)_.

### **Internationalization (i18n)**

- **[Next-Intl](https://next-intl.dev/docs/getting-started/app-router/without-i18n-routing)** – Handles translations with Next.js App Router.
- **[next-i18next](https://github.com/i18next/next-i18next)** – Alternative i18n library.

### **Code Quality**

- **[ESLint & Prettier](https://eslint.org/)** – Ensures consistent code formatting and best practices.
- **[Husky & Commitlint](https://typicode.github.io/husky/)** – Enforces Git commit message standards.

### **Icons**

- **[Lucide Icons](https://lucide.dev/)** – Modern SVG icon set.

### **Performance Optimization**

- **[Next.js Bundlers](https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling)** – Reducing package size, **dynamic imports**, and **lazy loading**.
- **[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)** – Monitors and improves performance scores.

### **SEO & Sitemap**

- **[Sitemap & Robots.txt](https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling)** – Improves search engine indexing.

### **Deployment**

- **[Vercel](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel)** – Deploy with **GitHub Actions** _(Needs testing)_.

### **Docker Support**

- Basic Dockerfile for **containerized deployment**.

### **Slack Integration**

- **(Planned Feature)** – Automate updates to the frontend team Slack channel.

---

## 🌍 Setting Up Git

Ensure your project is on GitHub by creating a repository and pushing your code using the following commands:

```sh
git remote add origin <your-repo-url>
git branch -M main
git add .
git commit -m "initial commit"
git push -u origin main
```

---

## 🎨 Customization

### 🔹 Updating the Favicon

The default favicon is located in `src/app/favicon.ico`. To personalize your project, replace this file with your own favicon. Ensure the new favicon follows the `.ico` format for optimal browser compatibility.

### 🔹 Using Lucide Icons

This project uses [Lucide React](https://lucide.dev/) for icons, a lightweight and customizable icon library. You can easily use any Lucide icon by importing it into your components.

#### Example:

```jsx
import { Home, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <nav>
      <Home size={24} />
      <Settings size={24} />
    </nav>
  );
}
```

Refer to the [Lucide React documentation](https://lucide.dev/docs/lucide-react) for more customization options.

### 🔹 Styling & Theming

The project includes [Mantine](https://mantine.dev/), a modern UI library that supports dark mode, theming, and customizable components. You can modify the theme in `src/theme.ts` to fit your branding.

#### Example (Updating the Theme):

```
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "blue", // Change the primary color
  fontFamily: "Inter, sans-serif", // Customize fonts
});
```

For more advanced styling options, check out [Mantine’s documentation](https://mantine.dev/theming/theme-object/).

---

## 📦 **Installation & Setup**

1. **Run the CLI tool and enter a project name:**

   ```sh
   npx github:lamah-co/nextJs-starter-template
   ```

2. **Navigate into the project folder:**

   ```sh
   cd <project-name>
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```
