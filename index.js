const express = require('express');
const app = express();
app.use(express.json());
const port = 4000
const mock = require('./AreYouMockingMe.json')

const getPeople = require('./getPeople')
const getPerson = require('./getPerson')
const getPersonByCar = require('./getPersonByCar')
const getPersonByAnimal = require('./getPersonByAnimal')

app.listen(port, () => console.log(`server running on port ${port}`))

app.get('/api/people', getPeople);
app.get('/api/person/:id', getPerson);
app.get('/api/cars/:car', getPersonByCar)
app.get('/api/animal/:anml', getPersonByAnimal)