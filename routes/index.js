var express = require('express'),
    router = express.Router();

router.get("/", function(req,res){
    res.render('index.ejs', {
        title: "Tucil AIB"
    });
});
module.exports = router;