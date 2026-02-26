import express from "express";
const router = express.Router();

router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "123456") {
    res.json({ success: true, token: "admin-token-123" });
  } else {
    res.json({ success: false, message: "Invalid Credentials" });
  }

});

export default router;