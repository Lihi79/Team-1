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
var blog = getLocalStorage();
// -----------------------------------
function uid() {
    return "id- " + Math.random();
}
// -----------------------------------
function handleAddItem(evt) {
    evt.preventDefault();
    var blogTitle = document.getElementById("title");
    var subTitle = document.getElementById("subtitle");
    var imgUrl = document.getElementById("textarea");
    var blogText = document.getElementById("imgUrl");
    var dateUploaded = getCurrentDate();
    var userName = localStorage.getItem("userName") || "";
    console.log(blogTitle, subTitle, imgUrl, blogText);
    blog.push(new Blog(blogTitle.value, subTitle.value, blogText.value, imgUrl.value, dateUploaded, userName));
    console.log(blog);
    console.log("hello");
    saveLocalStorage(blog);
    renderBlog(blog);
}
// -----------------------------------
function getCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Months are zero-based
    var day = currentDate.getDate();
    // Format the date as 'YYYY-MM-DD'
    var formattedDate = year + "-" + month
        .toString()
        .padStart(2, "0") + "-" + day.toString().padStart(2, "0");
    return formattedDate;
}
// ------------------------------------------------------------
var blogRender = document.querySelector("#blogRender");
var img = document.querySelector("#upload-img");
var signUpButton = document.querySelector("#singUp");
var doneEditButton = document.querySelector("#doneEdit");
///שיופיע יוזר ניים ודייט
// ------------------------------------------------------------
var userNameValue = localStorage.getItem("userName");
function renderBlog(blog) {
    var _this = this;
    alert("ef");
    var html = blog
        .map(function (blogs) {
        return "\n      <div class=\"container\">\n        <div class=\"blog\">\n          <div class=\"blog__post\">\n            <div class=\"blog__text\">\n              <h1 class=\"blog__title\" id=\"title\">" + blogs.blogTitle + "</h1>\n              <h3 class=\"blog__subtitle\" id=\"subtitle\">" + blogs.subTitle + "</h3>\n\n              <div class=\"blog__name-date\">\n                <p class=\"blog__user-name\">" + _this.userNameValue + "</p>\n                <p class=\"blog__date\" id=\"date\">" + getCurrentDate() + "</p>\n              </div>\n\n              <div class=\"blog__img\">\n                <img\n                  src=\"" + blogs.imgUrl + "\"\n                  alt=\"\"\n                  id=\"upload-img\"\n                />\n              </div>\n\n              <p class=\"blog__p\">" + blogs.blogText + "</p>\n            </div>\n          </div>\n        </div>\n      </div>\n  </body>\n    ";
    })
        .join(" ");
    blogRender.innerHTML = html;
    return html;
}
function renderToScreen() {
    blogRender.innerHTML = renderBlog(blog);
}
function saveLocalStorage(blog) {
    localStorage.setItem("blog", JSON.stringify(blog));
}
function doneEdit(blog) {
    localStorage.setItem("blog", JSON.stringify(blog));
    window.location.href = "../11-user-blog/11-user-blog.html";
}
function getLocalStorage() {
    var getLcPart1 = localStorage.getItem("blog");
    if (!getLcPart1)
        throw new Error("get Local Storage is null");
    var getLcPart2 = JSON.parse(getLcPart1);
    return getLcPart2;
}
// -------------------------------------------------
