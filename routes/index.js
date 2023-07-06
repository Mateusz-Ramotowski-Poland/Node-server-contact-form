var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
const multer = require("multer");
const upload = multer();
const email = require("../templates/email");

router.get("/", function (req, res) {
  res.send("Server is working");
});

router.post("/", upload.array("files"), function (req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "ramotOgrody@gmail.com",
      pass: process.env.gmail_pass,
    },
  });

  let attachments;

  if (req.files.length !== 0) {
    attachments = req.files.map((file) => {
      return {
        filename: file.originalname,
        content: file.buffer,
      };
    });
  }

  const webpage = req.body.webpage;
  const LukiWebpage = "ramotOgrody";

  transporter
    .sendMail({
      from: "ramotOgrody@gmail.com", // Gmail always will set authenticated username as the From
      replyTo: req.body.email,
      to: webpage === LukiWebpage ? "ramotOgrody@gmail.com" : "mateusz.ramotowski.praca@gmail.com",
      subject: webpage === LukiWebpage ? email.createLukiSubject(req.body) : email.createMatiSubject(req.body),
      html: webpage === LukiWebpage ? email.createLukiHTML(req.body) : email.createMatiHTML(req.body),
      attachments: attachments,
    })
    .then((info) => {
      res.send(info);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
