const express = require('express');

const {sendPartnershipEmail, sendGeneralEmail} = require('../controllers/contactusController');

const router =express.Router();

router.post('/send-partnership-email', sendPartnershipEmail);
router.post('/send-general-email', sendGeneralEmail);


module.exports=router;