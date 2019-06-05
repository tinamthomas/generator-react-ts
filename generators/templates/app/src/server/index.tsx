import * as React from 'react';
import * as express from 'express';
import * as path from 'path';

const app = express();
app.use('/', express.static(path.join(__dirname, '../../dist')));


app.get('/hello', function (req, res) {
    res.send('Hello World')
});


app.listen(process.env.PORT || 3001);