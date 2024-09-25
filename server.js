import express from 'express';
import router from './router/index.js';

const app = express();

app.use(express.static('public'));

app.use(express.json({ urlencoded: true , limit:'50mb'}));


app.use('/api', router);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});