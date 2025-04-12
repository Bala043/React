# 📘 Namaste React - Episode 02: Igniting Our App (Simplified + Technical)

## 🔹 What is npm?

**Simple:**  
`npm` helps developers share and use code written by others.

**Technical:**  
- It stands for **Node Package Manager**.
- It is the **largest registry** of open-source JavaScript packages.
- Developers use `npm` to install and publish packages.
- `npm init` starts a project; `npm init -y` skips questions and auto-generates `package.json`.

---

## 🔹 What is Parcel/Webpack? Why do we need it?

**Simple:**  
They bundle and optimize your files to make your app faster.

**Technical:**  
- They **minify**, **optimize**, and **bundle** multiple JS/CSS files.
- Useful when projects become large or have many files.
- Parcel is zero-config and simpler to use.

🛠️ **Install Parcel:**
```bash
npm install -D parcel
```

⚙️ **Commands:**
```bash
npx parcel index.html      # Dev build
npx parcel build index.html # Prod build
```

---

## 🔹 What is `.parcel-cache`?

**Simple:**  
Speeds up rebuilds by remembering previous work.

**Technical:**  
- Stores cache info for faster development builds.

---

## 🔹 What is npx?

**Simple:**  
It lets you run npm packages without installing them globally.

**Technical:**  
- Comes with npm ≥ 5.2.
- Runs any package directly from the registry.

---

## 🔹 dependencies vs devDependencies

**Simple:**  
- **dependencies** = needed in production.
- **devDependencies** = only for development.

---

## 🔹 What is Tree Shaking?

**Simple:**  
Removes unused code.

**Technical:**  
- Removes dead/unused code from the production bundle.

---

## 🔹 What is Hot Module Replacement (HMR)?

**Simple:**  
Updates changes without reloading the full page.

**Technical:**  
- Swaps updated modules live.
- Retains app state and improves dev speed.

---

## 🔹 Parcel Superpowers (Top 5)

1. 🚀 Fast dev build  
2. 🌐 Local server with HMR  
3. 🧠 Smart file watching (C++)  
4. ⚡ Caching = faster builds  
5. ✂️ Tree shaking  

---

## 🔹 What is `.gitignore`?

**Simple:**  
Tells Git which files to ignore.

**Technical:**  
- Add generated folders like `node_modules/`, `dist/` to avoid pushing them.

---

## 🔹 package.json vs package-lock.json

**Simple:**  
- `package.json` = project info + dependencies.  
- `package-lock.json` = locks exact dependency versions.

**Note:** Don't edit `package-lock.json` manually.

---

## 🔹 What is `node_modules/`?

**Simple:**  
Contains installed packages.

**Technical:**  
- Huge in size.  
- Should never be committed to Git.  
- Easily recreated using `package.json`.

---

## 🔹 What is `dist/`?

**Simple:**  
Contains final files for production.

**Technical:**  
- Minified + optimized files ready to be deployed.  
- Created after running `parcel build`.

---

## 🔹 What is `browserslist`?

**Simple:**  
Tells tools which browsers to support.

**Technical:**  
- Helps tools like Babel/Parcel to generate browser-compatible code.