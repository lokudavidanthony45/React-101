# React-101

This repository contains our beginner React practice project built with Vite.  
The main app is inside the `react101` folder and demonstrates reusable components, props, and simple state management.

## What we built

- A main activity page titled **GROUP ALPHA CLASS ACTIVITY**
- A `Message` component that displays a short intro text
- A reusable `Students` component rendered multiple times using different props (`name`, `course`, `year`)
- An interactive counter section labeled **Interactive GWA** using React `useState`
- A `NumberChecker` component that checks if the current counter value is **Even** or **Odd**

## Tech stack

- React 19
- Vite
- JavaScript (JSX)
- ESLint

## Project structure

- `react101/src/App.jsx` – main UI and state logic
- `react101/src/Message.jsx` – first custom component
- `react101/src/Students.jsx` – student details card using props
- `react101/src/NumberChecker.jsx` – even/odd checker component

## How to run

1. Open terminal in `react101`
2. Install dependencies:
	- `npm install`
3. Start development server:
	- `npm run dev`
4. Build for production:
	- `npm run build`

## Learning focus

This work practices:

- Creating and using functional components
- Passing and displaying data with props
- Managing UI state with `useState`
- Conditional rendering logic (even/odd output)