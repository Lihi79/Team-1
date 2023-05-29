var Blog = /** @class */ (function () {
    function Blog(blogTitle, subTitle, blogText, // public date: Function
    imgUrl) {
        this.blogTitle = blogTitle;
        this.subTitle = subTitle;
        this.blogText = blogText;
        this.imgUrl = imgUrl;
        this.uid = uid();
    }
    return Blog;
}());
var blog = [];
var User = /** @class */ (function () {
    function User(userName, password, email) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.uid = uid();
    }
    return User;
}());
var users = [];
