const express = require('express');
const routes = require('./routes')
const mongoose = require('mongoose');
// const cors = require('cors');


const app = express();
const port = process.env.PORT || 4000;
const db = 'marines';

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routes());

app.listen(port, () => {
    console.log('Server Online: ' + port);
})
