// const express = require('express')
import express from 'express';
import 'dotenv/config';

const app = express()
const port = process.env.PORT;
const hostname = process.env.HOST || 'localhost'; // Use HOST from .env or default to 'localhost'
// const hostname = '0.0.0.0'; // Use '0.0.0.0' to make it accessible externally

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home',(req,res)=>{
  res.send("<h1>Welcome to home</h1>")
})

app.listen(port,hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
      