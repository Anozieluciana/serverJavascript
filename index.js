//   const myFriends =[
//       {
//           name: 'presh',
//           age: 15,
//           school: 'lasuu',
//           mind: 'smart'
//       },
//       {
//           name: 'lu',
//           age: 12,
//           school: 'codelab',
//           mind: 'educative'
//       },
//         {
//             name: 'nel',
//             age: 17,
//             school: 'coding',
//             mind: 'creative'
//         }
//   ];


// const http = require('http')
// const port = 2021

// const App = http.createServer((req, res)=>{
//     // res.setHeader('content-type', 'text/plain')to make it show on the postman(plain text)
//       res.setHeader('content-type', 'application/json')
//       res.write('welcome to backendset05\n')
//       res.write('i am doing well\n')
//     res.end(JSON.stringify(myFriends))
// })
// App.listen(port, ()=>{
//     console.log('i am listening to my server')
// })