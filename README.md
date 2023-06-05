# Todo List App

The Todo List app is a simple web application that allows you to manage and organize your tasks. You can add tasks, mark them as completed, and delete tasks that are no longer needed.

## Technologies Used

- Vite.js: A fast and lightweight build tool for modern web applications.
- React: A JavaScript library for building user interfaces.
- useState: A React hook for managing state within functional components.
- useEffect: A React hook for performing side effects in functional components.
- localStorage: Web storage API for storing data in the browser.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.

## Installation

Clone the repository:

```bash
git clone <repository_url>
```

Navigate to the project directory:

```bash
cd react-tailwind-todo-list
```

Install the dependencies:

```bash
npm install
```

## Usage

```bash
npm run dev
```

Open your browser and visit http://localhost:5173 to access the Todo List app.

## Features

- Add tasks: Enter a task in the input field and click the "Add" button to add it to the list.
- Mark tasks as completed: Click the checkbox next to a task to mark it as completed. Completed tasks are displayed with a line-through.
- Delete tasks: Click the "Delete" button next to a task to remove it from the list.
- Persistence: The app uses localStorage to store tasks, ensuring that your tasks are saved even if you refresh the page or close the browser.
