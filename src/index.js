const express = require('express');
const app = express();
//aula 1
app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ 'message': 'Olá Mundo' });
});

app.get('/students', (request, response) => {
    const { name } = request.query;

    return response.json({ 'message': `Olá Mundo ${name}!` });
});

app.post('/students', (request, response) => {
    const { name, email } = request.body;
    return response.json({ name, email });

});


app.put('/students/:id', (request, response) => {
    const { id } = request.params;
    const { name, email } = request.body;
    return response.json({ name, email });

});


app.delete('/students/:id', (request, response) => {
    const { id } = request.params;

    return response.json({ message: `O id ${id} foi removido com sucesso` });

});


app.listen(3333, () => {
    console.log("Server running...");
});