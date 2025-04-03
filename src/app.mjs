import express from "express";
import session from "express-session";
import path from "path";
import dotenv from "dotenv";
import tasksRoutes from "./routes/tasks.mjs";
import authRoutes from "./routes/auth.mjs";

dotenv.config();
const app = express();

app.use(
    session({
      secret: process.env.SESSION_SECRET || "mysecret",
      resave: false,
      saveUninitialized: true
    })
  );

app.set("view engine", "hbs");
app.set("views", path.join(path.resolve(), "src", "views"));

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoutes);
app.use("/tasks", tasksRoutes);

app.get("/", (req, res) => {
  res.redirect("/login");
})

app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// cd desktop/final-project-deployment-Youngsang-Cho1