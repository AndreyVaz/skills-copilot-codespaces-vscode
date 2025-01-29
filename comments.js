// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the comments router
const commentsRouter = require('./routes/comments');
app.use('/comments', commentsRouter);

// Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});