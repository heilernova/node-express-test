import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.json('Hola mundo');
});


app.listen(3000, ()=>{
    console.log('Escuchadnos')
})