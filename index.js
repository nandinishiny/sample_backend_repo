// const express = require('express')
import express from 'express';
import 'dotenv/config';

const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home',(req,res)=>{
  res.send("<h1>Welcome to home</h1>")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
      