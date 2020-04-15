const mongoose = require('mongoose');

const urldb = 'mongodb://localhost/Ejemplo-MEAN';

mongoose.connect(urldb)
    .then(db => console.log('DataBases connected.'))
    .catch(err => console.error(err));


module.exports = mongoose