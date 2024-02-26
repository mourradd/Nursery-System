function checkFileUpload(req, res, next) {
    if (!req.file) {
        const error = new Error("Add imageProfile");
        error.status = 422; 
        return next(error);
    }
    next();
}
module.exports = checkFileUpload;
