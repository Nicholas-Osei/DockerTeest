// const express = require('express')
// const app = express()

// // app.get('/', (req,res)=> {
// //   res.sendFile(__dirname + '/client/index.html');
// // })

// // app.listen(8080, () => console.log('Server ready'))
// // const express = require('express')
// // const app = express()

// app.get('/', (req,res)=> {
//   res.sendFile(__dirname + '/client/index.html');
// })

// app.listen(8080, () => console.log('Server ready'))
// //app.listen(process.env.PORT || 3000, () => console.log('server ready'),console.log(process.env.PORT))

const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Azure!!!');
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});