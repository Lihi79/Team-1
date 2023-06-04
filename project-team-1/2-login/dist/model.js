// model
// --------
var RegisteredUser = /** @class */ (function () {
    function RegisteredUser(loginName, loginPassword) {
        this.loginName = loginName;
        this.loginPassword = loginPassword;
        this.uid = uid();
    }
    return RegisteredUser;
}());
var registerUsersArray = [];
