const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//settings
app.set('port', process.env.PORT || 8000);

//midleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors()); // direccion del servidor de angular 


//routes
app.use(require('./routes/employee.routes'));


app.listen(app.get('port'), () =>{
    console.log('app listen in port ' + app.get('port'));
});
