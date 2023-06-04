// model
// --------
var Blog = /** @class */ (function () {
    function Blog(blogTitle, subTitle, blogText, imgUrl, dateUploaded, userName) {
        this.blogTitle = blogTitle;
        this.subTitle = subTitle;
        this.blogText = blogText;
        this.imgUrl = imgUrl;
        this.dateUploaded = dateUploaded;
        this.userName = userName;
        this.uid = uid();
    }
    return Blog;
}());
var blog = [];
