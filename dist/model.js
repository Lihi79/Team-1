var Blog = /** @class */ (function () {
    function Blog(title, subtitle, username, text, date) {
        this.title = title;
        this.subtitle = subtitle;
        this.username = username;
        this.text = text;
        this.date = date;
        this.uid = uid();
    }
    return Blog;
}());
var blog = [];
function uid() {
    return "id- " + Math.random();
}
