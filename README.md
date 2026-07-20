# Google Books Search App 📚

A responsive React application that allows users to search for books using the Google Books API and view detailed information about each book.

## Overview

This project was built with React and Vite to practice working with external APIs, reusable components, state management, SCSS modules, and React Testing Library.

Users can search for books, browse results, and open a detailed modal view containing additional information about the selected book.

---

## Features

- 🔍 Search books using the Google Books API
- 📚 Display book results in a responsive grid layout
- 🖼️ Handle books with missing cover images
- 📖 View detailed book information in a modal
- ❌ Close modal using:
  - Close button
  - Clicking outside the modal
  - Escape key
- ⏳ Loading state while fetching data
- ⚠️ Error handling for failed searches
- ♻️ Reusable Button component
- 📱 Responsive design for mobile, tablet, and desktop
- ✅ Component testing with React Testing Library

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript (ES6+)
- SCSS Modules

### API

- Google Books API

### Testing

- Vitest
- React Testing Library
- Jest DOM

### Tools

- Git & GitHub
- VS Code
- npm

---

## Project Structure

```
src
│
├── components
│   │
│   ├── Header
│   ├── SearchBar
│   ├── BookCard
│   ├── BookGrid
│   ├── Button
│   ├── Modal
│   ├── Loader
│   └── ErrorMessage
│
├── services
│   └── bookApi.js
│
├── App.jsx
├── setupTests.js
└── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd google-books-search
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will run locally:

```
http://localhost:5173
```

---

## Running Tests

Run the test suite:

```bash
npm run test
```

Current tests cover:

- BookCard rendering book information
- BookCard handling missing images
- Button rendering and click events
- Modal rendering and closing behaviour
- App integration flow for opening the modal

Example test result:

```
Test Files  4 passed
Tests       7 passed
```

---

## API

This project uses the Google Books API to retrieve book information.

The API provides:

- Book title
- Authors
- Description
- Categories
- Published date
- Language
- Cover images

---

## Future Improvements

Possible future features:

- Pagination / Load More books
- Favourite books feature
- Save favourites using local storage
- Advanced search filters
- Dark/light theme toggle
- Deploy application online

---



## Author

Shabiha Sultana

Built as a React portfolio project.