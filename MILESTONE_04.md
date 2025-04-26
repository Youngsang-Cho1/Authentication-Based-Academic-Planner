Milestone 04 – Final Project Documentation
===

NetID
---
yc6521 

Name
---
Aiden (Youngsang) Cho  

Repository Link
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1  

URL for deployed site 
---
http://localhost:3000

URL for form 1 (from previous milestone) 
---
http://localhost:3000/login

Special Instructions for Form 1
---
- To access the application, visit `http://localhost:3000` after running `node src/app.mjs`.
- Basic user authentication is implemented using username, email, and password.
- After logging in or registering, it will be redirected to the task list.

URL for form 2 (from previous milestone) 
---
http://localhost:3000/tasks/new

Special Instructions for Form 2
---
- To add a new task, visit `http://localhost:3000/tasks/new` or click 'Add' at the header of the page.
- After clicking on 'Add Task' button, you will be redirected to `http://localhost:3000/tasks` and will see full task lists.

URL for form 3 (for current milestone)
---
http://localhost:3000/tasks/:id/edit

Special Instructions for Form 3
---
- To edit your to-do list item, replace the ":id" part with the actual id of todo list item.
- By just simply clicking "edit" button on the full-task page, you can access to the form and edit the content of the item.

First link to github line number(s) for constructor / HOF
---
- Array.filter and Array.map in `tasks.mjs` to show the title of completed tasks.
  https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1/blob/master/src/routes/tasks.mjs#L30  

Second link to github line number(s) for constructor / HOF
---
- Array.filter and Array.map in `tasks.mjs` to show the title of not completed tasks.
  https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1/blob/master/src/routes/tasks.mjs#L31  

Short description for links above
---
- In tasks.mjs, I used tasks.filter(task => task.completed) to get only completed tasks and then .map(task => task.title) to extract their titles. (for both completed and not completed tasks)

Link to github line number(s) for schemas (db.mjs)
---
- Mongoose **Task** and **User** schemas  
  https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1/blob/master/src/db.mjs#L1-L30  

Description of research topics above with points
---
- **3 pts** – ESLint Integration  
- **3 pts** – Unit Testing with Jest  
- **2 pts** – MongoDB Authentication (bcrypt + express-session)  
- **2 pts** – Task Sorting & Filtering  

Links to github line number(s) for research topics
---
- **ESLint config**  
  https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1/blob/master/.eslintrc.cjs#L1-L25  
- **Jest tests**  
  https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1/blob/master/__tests__/task.test.js#L1-L42  
- **Auth implementation**  
  https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1/blob/master/src/routes/auth.mjs#L1-L75  
- **Sorting by dueDate and title**  
  https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1/blob/master/src/routes/tasks.mjs#L14-L27  

Optional project notes 
---  

Attributions
---
- `src/routes/auth.mjs` – bcrypt & session logic based on [bcryptjs Docs](https://www.npmjs.com/package/bcryptjs)  
- `src/routes/tasks.mjs` – filtering logic inspired by [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)  