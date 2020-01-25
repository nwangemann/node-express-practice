const express = require('express');
const mock = require('./AreYouMockingMe.json')

const getPeople = ('/api/people', (req, res, next) => {
    console.log(req)
    res.status(200).send(mock)
})

module.exports = getPeople;