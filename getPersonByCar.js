const express = require('express');
const mock = require('./AreYouMockingMe.json');

const getPersonByCar = ((req, res, next) => {
    console.log('req.query, from get request in cars', req.params.car)
    const foundCar = mock.filter((elem) => {
        return elem.car === req.params.car
    })
    res.status(200).send(foundCar)
})

module.exports = getPersonByCar;