const express = require('express')
const redis = require('redis')

const app = express()
// const client = redis.createClient({
//     /** normally would use a URL connection. 
//      *  because we're using Docker, we can set-up
//      *  the connection by referring to it's 
//      *  docker-compose services name
//     */
//     host: 'redis-server',
//     /** specify the port where redis will be running */
//     port: 6379
// });


const client = redis.createClient({
    host:'redis-server',
    port: 6379,
    legacyMode: true
})


client.on('connect', (err) => {
    if(err) throw err;
    else console.log('redis connected')
})

// client.set('visits', 0);


app.get('/', async(req,res) => {
    res.send('Hello!' + client.host );

   
    // await client.get('visits', (err, visits) => {
    //     res.send('Number of visits is ' + visits)
    //     client.set('visits', parseInt(visits) + 1);
    // })
})

// app.get('/', (req, res) => {
//     res.send('Hi there!');
//   });

app.listen(8081, () =>{
    console.log('Listening on port 8081')
})