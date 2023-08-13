// const express = require('express');
const router = require('express').Router();
const apiRoutes = require('./api');
// const app = express();

// const notesRouter = require('./notes');
router.use('/api', apiRoutes);

// Import modular router for /notes
// app.use('/notes', notesRouter);
module.exports = router;