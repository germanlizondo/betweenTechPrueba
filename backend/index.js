const express = require('express');
const app = express();
const cors = require('cors');

require('./src/config/config');

//=========================================================== MIDDLEWARES ================================================================
app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use(express.static(__dirname + '/src/public'));


//=========================================================== ROUTES ================================================================
app.use(require('./src/routes/routes'));

//=========================================================== DATABASE ================================================================

require('./src/config/database');

//=========================================================== LISTEN ================================================================

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});