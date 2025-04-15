# Todo List Web Application

## Overview

Remembering tasks and managing all daily activities efficiently is often challenging. The Todo list Web Application will provide a simple but effective solution for this problem through enabling users to add, edit, and delete their to-do tasks. The application will allow users to add new tasks with title, description, and due date. Users can also mark it as completed and delete them when they do not need the task on their list anymore. This application will be implemented through using Express and MongoDB.

## Data Model

The application will store Users and Tasks.

- Users can have multiple tasks (by references)
- Each task will include a title, description, due date, and completion status

An Example User:

```javascript
{
  username: "Aiden",
  hash: // a password hash,
  tasks: // an array of references to Task documents
}
```

An Example Task:

```javascript
{
  user: // a reference to a User object,
  title: "AIT 467 Homework 1",
  description: "Submit GitHub repo link on Gradescope",
  dueDate: "2024-03-19",
  completed: false
}
```


## [Link to Commented First Draft Schema](https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-Youngsang-Cho1/tree/master/db.mjs) 

## Wireframes
/login - Login page
documentation/IMG_0269.PNG

/tasks - Page showing all tasks
documentation/IMG_0270.PNG

/tasks/new - Page for adding a new task
documentation/IMG_0271.PNG

/tasks/:id/edit - Page for editing a task
documentation/IMG_0272.PNG

## Site map

Home Page (/)
|-- Login (/login)
      |-- Task List (/tasks)
        |-- Add Task (/tasks/new)
        |-- Edit Task (/tasks/:id/edit)
        |-- Delete Task (button action)

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can add tasks so that I can keep track of my work
4. as a user, I can edit tasks so that I can update details of my task
5. as a user, I can delete tasks so that I can remove completed or unnecessary tasks
6. as a user, I can mark tasks as completed so that I can track my progress.

## Research Topics

(3 points) ESLint Integration
- Used to enforce coding standards and best practices automatically.

(3 points) Unit Testing with Jest
- Implements at least 4 test cases for form submission and task completion.

(2 points) MongoDB Authentication
- Implements basic authentication to ensure data privacy.

(2 points) Task Sorting & Filtering
- Allows users to sort tasks by due date and filter by completion status.

10 points total out of 8 required points 


## [Link to Initial Main Project File](https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-Youngsang-Cho1/tree/master/app.mjs) 

## Annotations / References Used

TBD
