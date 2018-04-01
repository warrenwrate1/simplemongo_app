const jwt = require('jsonwebtoken');

var data ={
    text:"warrenwrate",
    email:'warren.wrate@test.com'
}

var tokenf = jwt.sign(data, 'simplesecret');

var tokeng = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXh0Ijoid2FycmVucmF0ZSIsImVtYWlsIjoid2FycmVuLnJhdGVAdGVzdC5jb20iLCJpYXQiOjE1MjI1NjYxMjV9.2-PPWmdOxN8m_BX5SuoaiR61qE5E6zyueqCs-Pzn2no"

var decode = jwt.verify(tokeng, 'simplesecret')


  console.log(tokenf)

  console.log(decode);