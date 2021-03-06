const userService = require('../services/userServices/index');

createNewAccount = (req, res, next) => {
    userService.createNewAccountService.addNewUser(req, req.body, res);
}

validateAccount = (req, res, next) => {
    userService.validateEmailAccount.validateEmailAccount(req.body.data, res);
}

isCodeValid = (req, res, next) => {
    userService.isCodeValidService.isCodeValid(req.body.data, res);
}

loginUser = (req, res, next) => {
    userService.userLoginService.userLogin(req.body.data, res);
}

module.exports = {
    createNewAccount,
    validateAccount,
    isCodeValid,
    loginUser,
}