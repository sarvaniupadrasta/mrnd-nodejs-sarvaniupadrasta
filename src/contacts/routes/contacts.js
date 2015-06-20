var express = require('express');
var router = express.Router();

/* GET contacts */
router.get('/:id', function (req, res, next) {
    res.json(array[req.params.id]);
});

router.post('/', function (req, res, next) {
    count++;
    array.push(req.body);
    res.json(count - 1);
  console.log(req.body);
});

router.put('/:id', function (req, res, next) {
    array[req.params.id].firstName = req.body.firstName;
    return res.json(array[req.params.id]);
  console.log(req.body);

});


});


module.exports = router;
