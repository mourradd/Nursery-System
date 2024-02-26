const express = require('express');
const router = express.Router();
const upload = require("../middlewares/multer");
const checkFileUpload = require('../middlewares/Validator/imageValidation');
const {createTeacher} = require("../Controller/techerController");
const { teacherInsertArray } = require("../middlewares/Validator/teacherValidator");
const { validatorAcitvator } = require("../middlewares/Validator/validator");

router.route("/Registeration")
        .post(
            upload.single("profileImage"),
            checkFileUpload,
            teacherInsertArray,
            validatorAcitvator,
            createTeacher
        )
module.exports = router;  