import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send('olaa');
});

app.listen(process.env.PORT || 5555);