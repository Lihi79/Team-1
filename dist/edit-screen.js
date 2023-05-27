var Blog = /** @class */ (function () {
    function Blog(name, blogTitle, date, blogText) {
        this.name = name;
        this.blogTitle = blogTitle;
        this.date = date;
        this.blogText = blogText;
        this.serialNum = serialNumber();
    }
    return Blog;
}());
var BlogArray = [];
// view
// --------
var root = document.querySelector("#root");
// controller
// ------------
function form(evt) {
    try {
        evt.preventDefault();
        console.log("evt:", evt);
        var name = evt.target.elements.name.value;
        var blogTitle = evt.target.elements.blogTitle.value;
        var date = evt.target.elements.date.value;
        var blogText = evt.target.elements.blogText.value;
        BlogArray.push(new Blog(name, blogTitle, date, blogText));
        renderToPage(BlogArray);
    }
    catch (error) {
        console.log(error);
    }
}
function renderToPage(BlogArray) {
    try {
        if (!BlogArray || !Array.isArray(BlogArray))
            throw new Error("BlogArray is not an array");
        var html = BlogArray.map(function (ca) {
            return "\n            <div class=\"onScreen\">\n                  <h2>blog info: </h2> \n                  <h2 class=\"onScreen2__h2\">" + ca.blogTitle + "</h2> \n                  <h2 class=\"onScreen2__h2\">" + ca.name + "  , " + ca.date + "  </h2> \n                  <h2 class=\"onScreen2__h2\"> " + ca.blogText + "</h2> \n              </div>\n              ";
        }).join(" ");
        root.innerHTML = html;
        return html;
    }
    catch (error) {
        console.log(error);
        return "";
    }
}
// helper
// ---------
function serialNumber() {
    return "Serial Number: " + Math.random();
}
function render() {
    if (!root)
        throw new Error("root not found");
    root.innerHTML = renderToPage(BlogArray);
}
function saveInLocalStorage(BlogArray) {
    try {
        if (!BlogArray) {
            throw new Error("cant find BlogArray");
        }
        else {
            localStorage.setItem("BlogArray", JSON.stringify(BlogArray));
        }
    }
    catch (error) {
        console.log(error);
    }
}
function getFromLocalStorage() {
    var information = localStorage.getItem("BlogArray");
    if (!information)
        throw new Error("cant find information");
    var _BlogArray = JSON.parse(information);
    return _BlogArray;
}
