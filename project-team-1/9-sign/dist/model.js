// model
// --------
var User = /** @class */ (function () {
    function User(userName, email, password, cpass) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.cpass = cpass;
        this.uid = uid();
    }
    return User;
}());
var users = [];
