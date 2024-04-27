const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes')

router.get('/', (req, res)=>{
    res.json(obj)
})

module.exports = router;