"use strict";
import Model from '../models/model.js';
import nodemailer from 'nodemailer';
const messagesModel = new Model('messages');
export const messagesPage = async (req, res) => {
  try {
    const data = await messagesModel.select('name, message, id');
    const count ="23"
    res.status(200).json({ messages: data.rows,count:count });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const SendEmail = async (req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'sonamjay0125@gmail.com', 
      pass: 'wlbzlhzmkhlytygh',
    },
  });
let mailOption = {
  from: '"Tech Marbal"<sonamjay0125@gmail.com>', // sender address
  to: req.body.to,
  cc: req.body.cc,
  bcc: req.body.bcc,
  subject: "Thanks for contacting us!!!!", 
  text: "smtp testing",
  html: `Hello ${req.body.name} Thanks for registration will contact you soon :-)`,
  attachments: [
    {
      filename: 'pic.png',
      path: 'src/assete/pic.png'
    }
  ]
}
  transporter.sendMail(mailOption, (err, info) => {
    if(err){
      res.status(200).json({ messages: err.message });
     console.log(err);
    } else {
      res.status(200).json({ messages: "email send sucessfully" });
      console.log(info);
    }
  });
};

export const messagesById = async (req, res) => {
  try {
    const id = req.params.id?Number(req.params.id):null;
    console.log(id)
    const data = await messagesModel.select('name, message, id',` WHERE id = ${id}`);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
export const messagesByName = async (req, res) => {
  let { name } = req.body;
  const formateName = name.toLowerCase()
  try {
    const data = await messagesModel.select('name, message, id',` WHERE name = '${formateName}'`);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
export const addMessage = async (req, res) => {
  const { name, designation	,message } = req.body;
  const columns = 'name, designation, message';
  const values = `'${name}', '${message}', '${designation}'`;
  try {
    const data = await messagesModel.insertWithReturn(columns, values);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(400).json({ messages: err.message });
  }
};
