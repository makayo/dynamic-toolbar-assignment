# Dynamic Toolbar Assignment — React + Vite + Vitest

This project demonstrates how to build a dynamic React toolbar that renders multiple buttons from a data array. Each button is a reusable `AlertButton` component that triggers a unique browser alert when clicked. The buttons include inline styling and a hover effect for visual feedback.

The project also includes a complete automated test suite using Vitest and React Testing Library, validating both components and their dynamic behavior.

## Objectives

- Build a reusable `AlertButton` component  
- Dynamically render multiple buttons from an array  
- Trigger unique alert messages per button  
- Apply inline styling and hover effects  
- Write automated tests for both components  
- Validate dynamic rendering, event handling, and empty states  

## Project Setup (Vite + React)

1. Create the project:

```bash
npm create vite@latest dynamic-toolbar-assignment -- --template react
```

2. Navigate into the project folder:

```bash
cd dynamic-toolbar-assignment
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

Use `.jsx` extensions for JSX files.

## Testing Setup (Vitest + React Testing Library)

1. Install testing dependencies:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

2. Add a test script to `package.json`:

```json
"test": "vitest"
```

3. `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    globals: true
  }
})
```

4. `setupTests.js`:

```js
import '@testing-library/jest-dom';
```

## Component Structure

### AlertButton.jsx

- Accepts a `message` prop  
- Uses `children` for button text  
- Calls `alert(message)` on click  
- Includes inline styling and hover animation  

### Toolbar.jsx

Defines a dynamic array of button objects:

```js
const buttons = [
  { message: "Downloading!", children: "Download File" },
  { message: "Sharing!", children: "Share Document" },
  { message: "Uploading!", children: "Upload File" }
];
```

- Uses `.map()` to render `AlertButton` components  
- Assigns unique `key` props  
- Passes props directly to each button  

## File Structure

```
src/
├── AlertButton.jsx
├── Toolbar.jsx
├── tests.jsx
├── App.jsx
├── main.jsx
├── index.css
setupTests.js
vite.config.js
```

## How It Works

- `Toolbar` maps over the `buttons` array  
- Each `AlertButton` receives its own message and label  
- Clicking a button triggers its unique alert  
- Inline styles provide hover feedback  

**Example Buttons**

| Button Label     | Alert Message |
|------------------|---------------|
| Download File    | Downloading!  |
| Share Document   | Sharing!      |
| Upload File      | Uploading!    |

## Automated Test Suite (6 Tests Total)

All tests are located in `src/tests.jsx` and cover both components.

### AlertButton Tests (2)

1. Renders a button with the correct label and triggers alert  
2. Handles missing children gracefully  

### Toolbar Tests (4)

1. Renders the correct number of buttons dynamically  
2. Each button triggers its own alert message  
3. Updates correctly when the button array changes  
4. Handles an empty buttons array gracefully  

### Actual Test Output

```
✓ src/tests.jsx (6 tests)
  ✓ AlertButton and Toolbar Combined Tests (6)
    ✓ renders AlertButton with correct label and triggers alert
    ✓ AlertButton handles empty children gracefully
    ✓ Toolbar renders the correct number of buttons
    ✓ Toolbar buttons trigger correct alert messages
    ✓ Toolbar updates correctly when the buttons array changes
    ✓ Toolbar handles empty buttons array gracefully

Test Files  1 passed (1)
Tests       6 passed (6)
```

## Manual Validation Steps

- Open the Vite dev server  
- Confirm each button renders correctly  
- Click each button and verify the alert message  
- Hover over each button to confirm styling  
- Refresh the page to ensure state resets correctly  

## Summary

This project demonstrates:

- Reusable component architecture  
- Dynamic UI rendering from data  
- Event handling in React  
- Inline styling and hover animations  
- A complete test suite validating component behavior, including empty states  

The result is a fully dynamic, test‑driven toolbar that is easy to extend and maintain.
