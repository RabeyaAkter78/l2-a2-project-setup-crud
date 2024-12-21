import express from 'express';

export const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});


 