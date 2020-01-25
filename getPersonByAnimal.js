const express = require('express');
const mock = require('./AreYouMockingMe.json')


const getPersonByAnimal = ((req, res, next) => {
    const foundAnimal = mock.filter((elem) => {
        return elem.favorite_animal === req.params.anml
    })
    res.status(200).send(foundAnimal)
})


module.exports = getPersonByAnimal;