# Dynamic Toolbar Assignment — React + Vite

## Overview

This project demonstrates how to build a **dynamic React Toolbar** that renders multiple buttons based on a **data array**. Each button is a reusable `AlertButton` component, capable of triggering a **unique browser alert** when clicked.  

This assignment reinforces:

- Passing props to reusable components  
- Using `children` for button text  
- Rendering components dynamically with `.map()`  
- Assigning `key` props to dynamically created components  
- Inline styling and hover effects in React  
- Using Vite with Hot Module Replacement (HMR)

---

## Objectives

- Create a reusable `AlertButton` component that accepts `message` and `children` props.  
- Use a **data array** to dynamically render multiple buttons.  
- Display a browser alert when a button is clicked.  
- Ensure each button has a **unique key** in the render loop.  

---

## Project Setup (Vite + React)

1. **Initialize the project**

```bash
npm create vite@latest dynamic-toolbar-assignment -- --template react
```

2. **Navigate into the project folder**

```bash
cd dynamic-toolbar-assignment
```

3. **Install dependencies**

```bash
npm install
```

4. **Start the development server**

```bash
npm run dev
```

> **Tip:** Vite requires `.jsx` extensions for files containing JSX. Make sure your components are saved as `.jsx`.

---

## Component Structure

### AlertButton.jsx

A reusable button component that:

- Accepts a `message` prop  
- Accepts `children` for button text  
- Triggers `alert(message)` when clicked  
- Includes inline styling and a **hover effect** (background color change + lift animation)

### Toolbar.jsx

A dynamic container component that:

- Defines an array of button objects:

```javascript
const buttons = [
  { message: "Downloading!", children: "Download File" },
  { message: "Sharing!", children: "Share Document" },
  { message: "Uploading!", children: "Upload File" },
  // Add more buttons as needed
];
```

- Uses `.map()` to render `AlertButton` components dynamically  
- Assigns a **unique key** to each button  
- Passes `message` and `children` props to each button  

---

## Example File Structure

```
src/
├── App.jsx
├── AlertButton.jsx
├── Toolbar.jsx
├── main.jsx
└── index.css
```

---

## How It Works

- `Toolbar` iterates over the **buttons array** using `.map()`  
- Each `AlertButton` displays its `children` text as the button label  
- Clicking a button triggers `alert(message)`  
- Inline styles provide hover effects and basic styling  

**Example Buttons**

| Button Label       | Alert Message       |
|------------------|-------------------|
| Download File     | Downloading!      |
| Share Document    | Sharing!          |
| Upload File       | Uploading!        |

---

## Validation Steps

1. Open your browser to the local Vite URL (usually `http://localhost:5173`)  
2. Test each button in the toolbar and confirm:  
   - The correct alert message appears  
   - Each button triggers its **own unique message**  
   - Buttons render with proper styling and hover effect

---

## Test Cases

### Normal Test Cases

**Test Case 1: Download Button**

- **Action:** Click the **Download File** button  
- **Expected Result:** Alert shows `"Downloading!"`

**Test Case 2: Share Button**

- **Action:** Click the **Share Document** button  
- **Expected Result:** Alert shows `"Sharing!"`

**Test Case 3: Upload Button**

- **Action:** Click the **Upload File** button  
- **Expected Result:** Alert shows `"Uploading!"`

---

### Edge Test Cases

**Test Case 4: Rapid Clicks**

- **Action:** Click a button multiple times quickly  
- **Expected Result:** Alert appears each time without crashing or errors

**Test Case 5: Page Refresh**

- **Action:** Refresh the browser page  
- **Expected Result:** Buttons reload and remain functional

**Test Case 6: Hover Effect Check**

- **Action:** Hover the mouse over each button  
- **Expected Result:** Button changes color and moves slightly upward  
- Confirms hover styles are applied correctly

---

## Summary

This assignment demonstrates how to:

- Build reusable components  
- Pass props and children dynamically  
- Render UI elements from a data array  
- Handle events in React  
- Apply inline styles and hover effects  

The result is a **dynamic, data-driven toolbar** that is easy to extend by simply adding more objects to the buttons array.