const express = require("express");
const router = express.Router();
const { classInsertArray } = require('../middlewares/Validator/classValidation');
const { getClasses, addClass, updateClass, deleteClass, getClassById, getStudentByClassId, getTeacherByClassId } = require("../Controller/classController");
const { validatorAcitvator } = require('../middlewares/Validator/validator');

router.route("/class")
    .get(getClasses)
    .post(classInsertArray, validatorAcitvator, addClass)
    .put(classInsertArray, validatorAcitvator, updateClass)
    .delete(deleteClass);

router.route("/class/:id")
    .get(getClassById);

router.route("/class/child/:id")
    .get(getStudentByClassId);

router.route("/class/teacher/:id")
    .get(getTeacherByClassId);

module.exports = router