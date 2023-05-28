var Blog = /** @class */ (function () {
    function Blog(blogTitle, subTitle, 
    // public date:
    blogText // public date: Function
    ) {
        this.blogTitle = blogTitle;
        this.subTitle = subTitle;
        this.blogText = blogText;
        this.uid = uid();
    }
    return Blog;
}());
var blog = [];
