Milestone 02
===

Repository Link
---
https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1


Special Instructions for Using Form (or Login details if auth is part of your project)
---
- To access the application, visit `http://localhost:3000` after running `node src/app.mjs`.
- Basic user authentication is implemented using username, email, and password.
- After logging in or registering, it will be redirected to the task list.
- You can add new tasks at `/tasks/new`. Edit and delete features will be implemented in the next milestone.

URL for form 
---
http://localhost:3000/login
http://localhost:3000/tasks/new (after registering or logging in)

URL for form result
---
http://localhost:3000/tasks

URL to github that shows line of code where research topic(s) are used / implemented
--- 
[MongoDB Data Models](https://github.com/nyu-csci-ua-0467-001-002-spring-2025/final-project-deployment-Youngsang-Cho1/blob/main/src/db.mjs) line 7-23
    - Mongoose schemas `Task` and `User` are defined in `db.mjs`.

References 
---
[Official Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
    - Used for setting up Mongoose schemas and defining Task and User models.