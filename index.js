const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.send("Hello Abhishek, How are you");
});

app.get("/date", async (req, res) => {
  let date = new Date();
  res.send(`Todays date is   ${date.getDay()}-${date.getMonth() +1}-${date.getFullYear()} And Time is ${date.getHours()}:${date.getMinutes()}`);
});

app.get("/time", async (req, res) => {
  const indiaTimeZone = 'Asia/Kolkata';
  const currentTimeInIndia = new Date().toLocaleString('en-US', { timeZone: indiaTimeZone });
  res.send(`Current time in India is: ${currentTimeInIndia}`);
});

app.get("/page", async (req, res) => {
  res.sendFile('./page.html',{root:__dirname});
});
app.listen(3000);
