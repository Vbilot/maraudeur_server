var express = require('express');
var router = express.Router();
const db = require('../db/myPostGreSQLClient');

let form = require('express-form'),
    field = form.field;



router.get('/',(req,res)=> {
    // aller chercher data dans la base de donné

    db.query('SELECT * FROM users', (err, datares) => {
        if (err) throw err;
        let str = '';
        for (let row of datares.rows) {
            console.log(JSON.stringify(row));
            str = str + JSON.stringify(row);
            res.write(JSON.stringify(row));
        }
        res.send();
    });
});


router.get('/2',(req,res)=> {
    // aller chercher data dans la base de donné

    db.query('SELECT * FROM users', (err, response) => {
        if (err) throw err;
        data={
          rows:response.rows,
          nombre:response.rowCount
        }
        res.send(data);
    });
});



module.exports = router;
