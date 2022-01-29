const fs = require('fs')

const http = require('http')

const port = 2022;

const App = http.createServer((req, res)=>{
    // to pass an html file to the server
    // res.setHeader('content-type', 'text/html')
    // res.end('<h1>i am so beautifully and specially made</h2>')
    fs.readFile('./index.html', (error, data)=>{
      if(error){
          console.log('file not found')
      }else{
          res.setHeader('content-type', 'text/html')
          res.end(data)
      }
    })
})
App.listen(port, ()=>{
    console.log('i am listening to my server')
})