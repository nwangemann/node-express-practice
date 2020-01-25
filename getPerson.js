const express = require('express');
const mock = require('./AreYouMockingMe.json')

const getPerson = ('/api/person/:id', (req, res, next) => {
    console.log("this fired on the request")
    const personRes = mock.filter((elem) => {
       return elem.id === parseInt(req.params.id)
    })
    res.status(200).send(personRes)
})

module.exports = getPerson;