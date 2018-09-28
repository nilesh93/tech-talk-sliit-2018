const express = require('express');

const app = express();

let server;

app.get('/hello', (req, res) => {
    res.send('Hello World');
})

app.get('/force-error', () => {
    // server.close();
    throw new Error("some error");

})

server = app.listen(3000, () => {
    console.log('app started on http://localhost:3000');
});