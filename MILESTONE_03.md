Milestone 03
===

Repository Link
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1

URL for form 1 (from previous milestone) 
---
http://localhost:3000/login

Special Instructions for Form 1
---
- To access the application, visit `http://localhost:3000` after running `node src/app.mjs`.
- Basic user authentication is implemented using username, email, and password.
- After logging in or registering, it will be redirected to the task list.

URL for form 2 (for current milestone)
---
http://localhost:3000/tasks/new

Special Instructions for Form 2
---
- To add a new task, visit `http://localhost:3000/tasks/new` or click 'Add' at the header of the page.
- After clicking on 'Add Task' button, you will be redirected to `http://localhost:3000/tasks` and will see full task lists.

URL(s) to github repository with commits that show progress on research
--- 
- [Jest Unit Test Implementation](https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1/blob/master/__tests__/task.test.js) — basic task creation test using Jest
- [ESLint Script in package.json](https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1/blob/master/package.json#L12) — added linting configuration and script
- [MongoDB Password Hashing & Session Auth](https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1/blob/master/src/routes/auth.mjs#L7-L86) — user authentication using bcrypt and express-session
- [Task Filtering by dueDate](https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1/blob/master/src/routes/tasks.mjs#L13-L31) — sorted tasks ascending by due date

References 
---
