const express = require('express');

// Setting up PORT that our server is going to listen on
const PORT = process.env.PORT || 3000;
const app = express();

// Adding a route for our application
app.get('/', (request, response) => {
    response.send("hello from server");
})

app.get('/about', (request, response) => {
    response.send("this is about route!")
})


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})