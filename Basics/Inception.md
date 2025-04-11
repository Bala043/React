## Namaste React – Episode 01: Inception

---

### ❓ What is Emmet?

**Emmet** is a toolkit for web developers that lets you write shortcuts for HTML and CSS.  
These shortcuts expand into full code, helping you write faster and more efficiently.

---

### ❓ What is CDN? Why do we use it?

**CDN (Content Delivery Network)** is a group of servers distributed across locations to deliver web content faster.

- Improves speed and performance
- Reduces server load
- Provides high availability

---

### ❓ Why is React called "React"?

React is called **React** because it **reacts** to changes.  
It was developed by Facebook to update and render UI efficiently based on user interactions like clicking, typing, or submitting forms.

---

### ❓ What is `crossorigin` in the script tag?

The `crossorigin` attribute is used to handle **CORS (Cross-Origin Resource Sharing)** requests.

It allows the browser to fetch resources like scripts from another domain **securely**.

#### Syntax:
```html
<script crossorigin="anonymous|use-credentials" src="..."></script>
```

**Why is it important?**
- Enables better error reporting in React 16+
- Works only if the CDN provides the header:  
  `Access-Control-Allow-Origin: *`

---

### ❓ Difference between React and ReactDOM?

| React        | ReactDOM                            |
|--------------|-------------------------------------|
| Core library for building UI components | Enables React to interact with the DOM |

- **React**: Provides `createElement()`, `Component`, etc.
- **ReactDOM**: Provides `ReactDOM.render()`, and server-side rendering like `ReactDOMServer.renderToString()`

---

### ❓ What is the difference between `react.development.js` and `react.production.js` via CDN?

| Development Build | Production Build          |
|--------------------|---------------------------|
| Slower, full of warnings and errors | Optimized, faster, minified |
| Used for debugging  | Used in live/production apps |

---

### ❓ What are `async` and `defer` attributes in the `<script>` tag?

#### `async`
- Downloads script in background
- Executes it **as soon as it's available**
- Doesn't wait for HTML parsing to finish

```html
<script async src="file.js"></script>
```

#### `defer`
- Downloads script in background
- Executes **after the HTML parsing is complete**
- Useful when scripts depend on DOM

```html
<script defer src="file.js"></script>
```

---

### ❓ Difference between Library and Framework?

| Library                          | Framework                          |
|----------------------------------|-------------------------------------|
| You call the library functions   | Framework calls your code          |
| More flexible                    | More opinionated, structured       |
| Used for specific tasks          | Provides full app structure        |

**Examples:**
- React → Library (UI focused, flexible)
- Angular → Framework (complete app structure)

---

> ✅ A library gives you tools.  
> 🏗️ A framework gives you rules.