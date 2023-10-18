const express = require("express");
const app = express();
const emailService = require("./emailService"); // Import your email service
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your React app's URL
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post("/send-email", (req, res) => {
  try {
    emailService.sendEmail(req.body);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
