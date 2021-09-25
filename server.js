const express = require('express')
const app = express()

// app.get('/', (req,res)=> {
//   res.sendFile(__dirname + '/client/index.html');
// })

// app.listen(8080, () => console.log('Server ready'))
// const express = require('express')
// const app = express()

// app.get('/', (req,res)=> {
//   res.sendFile(__dirname + '/client/index.html');
// })
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

//app.listen(8080, () => console.log('Server ready'))
app.listen(process.env.PORT || 3000, () => console.log('server ready'))
