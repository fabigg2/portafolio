const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5500;


app.use(express.static('build'));

app.get('/*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
})

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
})

app.listen(port, ()=>console.log('app on port: '+port));