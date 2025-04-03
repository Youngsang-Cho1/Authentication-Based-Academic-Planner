import bcrypt from 'bcryptjs';
import express from "express";
import { User } from "../db.mjs";

const router = express.Router();

const startAuthenticatedSession = (req, user) => {
    return new Promise((fulfill, reject) => {
      req.session.regenerate((err) => {
        if (!err) {
          req.session.user = user; 
          fulfill(user);
        } else {
          reject(err);
        }
      });
    });
  };
  
const endAuthenticatedSession = req => {
    return new Promise((fulfill, reject) => {
      req.session.destroy(err => err ? reject(err) : fulfill(null));
    });
  };


router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async(req, res) => {
  try{
    const {username, email, password} = req.body;
    if (username.length < 8 || password.length < 8) {
      throw { message: 'USERNAME PASSWORD TOO SHORT' };
    }
    const usernameExist = await User.findOne({ username });
    if (usernameExist) {
      throw { message: 'USERNAME ALREADY EXISTS' };
    }
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      throw { message: 'EMAIL ALREADY EXISTS' };
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({username, email, password: hashedPassword});
    await user.save();
    await startAuthenticatedSession(req, user);
    res.redirect("/tasks");
  }
  catch (err) {
    res.render("register", {message: err.message || "Error during registration"});
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw { message: "USER NOT FOUND" };
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      throw { message: "PASSWORDS DO NOT MATCH" };
    }

    await startAuthenticatedSession(req, user);
    res.redirect("/tasks"); 
  } 
  catch (err) {
    console.log(err);
    res.render("login", {message: err.message || "Login unsuccessful",});
  }
});

  
router.get("/logout", async (req, res) => {
  await endAuthenticatedSession(req);
  res.redirect("/login"); 
});

export default router;
  





