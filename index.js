// index.js
const express = require("express");
const app = express();

// Middleware عشان يقرأ JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// صفحة بسيطة للميني اب
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Telegram Mini App</title>
    </head>
    <body style="font-family: sans-serif; text-align:center; padding:40px;">
      <h1>مرحبا 👋</h1>
      <p>هذه تجربة Mini App مع بوت تليجرام</p>
      <button onclick="sendData()">إرسال بيانات للبوت</button>

      <script>
        function sendData() {
          if (window.Telegram && window.Telegram.WebApp) {
            Telegram.WebApp.sendData("رجعنا البيانات للبوت ✅");
          } else {
            alert("هذا مو داخل من تليجرام WebApp");
          }
        }
      </script>
    </body>
    </html>
  `);
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
