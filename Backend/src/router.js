const authController = require('../controller/auth')
const stripeController = require('../controller/stripe')
const express = require('express');
const router = express.Router();


//test flag
router.get('/', (req, res) => {
    res.json({
        test: "success"
    })
});

router.post('/signup', authController.signUp);
router.post('/login', authController.logIn);
router.post('/googlelogin', authController.google);
router.post('/stripe', stripeController.buy);

module.exports = router;    