const express = require("express");
const bodyParser = require("body-parser");
// const router = require('./src/routes');

const PORT = process.env.PORT || 4000;
app = express();

for(let key in process.env){
    console.log(`${key} is `+ process.env[key]);
}


app.get('/', (req, res)=>{
    res.send(`<h3>Greetings, Panda</h3>`);
});
// app.use(router);

app.listen(PORT, ()=>{
    console.log(`Working on ${PORT}`);
});
