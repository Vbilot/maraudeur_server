var express = require('express');
var router = express.Router();


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




module.exports = router;
