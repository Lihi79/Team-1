function handleAddItem(evt) {
    evt.preventDefault();
    // console.log(evt);
    var blogTitle = evt.target.elements.blogTitle.value;
    var subTitle = evt.target.elements.subTitle.value;
    var blogText = evt.target.elements.blogText.value;
    var imgUrl = evt.target.elements.imgUrl.value;
    blog.push(new Blog(blogTitle, subTitle, blogText, imgUrl));
    // saveLocalStorage("data", blog);
    saveLocalStorage(blog);
    renderBlog(blog);
}
// user sign up
// ------------------------------------------------------------
function renderBlog(blog) {
    var html = blog
        .map(function (blogs) {
        return "    \n      <div class=\"container\">\n        <div class=\"blog\">\n          <div class=\"blog__post\">\n            <div class=\"blog__text\">\n              <h1 class=\"blog__title\" id=\"title\">" + blogs.blogTitle + "</h1>\n              <h3 class=\"blog__subtitle\" id=\"subtitle\">" + blogs.subTitle + "</h3>\n\n              <div class=\"blog__name-date\">\n                <p class=\"blog__user-name\">--user name--</p>\n                <p class=\"blog__date\" id=\"date\">--date--</p>\n              </div>\n\n              <div class=\"blog__img\">\n                <img\n                  src=\"" + blogs.imgUrl + "\"\n                  alt=\"\"\n                  id=\"upload-img\"\n                />\n              </div>\n\n              <p class=\"blog__p\">" + blogs.blogText + "</p>\n            </div>\n          </div>\n        </div>\n      </div>\n  </body>\n    ";
    })
        .join(" ");
    // renderToScreen();
    // renderToScreen(blogRender, html);
    blogRender.innerHTML = html;
    return html;
}
function renderToScreen() {
    blogRender.innerHTML = renderBlog(blog);
}
function saveLocalStorage(key, arr) {
    localStorage.setItem(key, JSON.stringify(arr));
}
// function saveLocalStorage(key, blog: Blog[]) {
//   try {
//     if (!blog) {
//       throw new Error("item i not valid");
//     }
//     localStorage.setItem(key, JSON.stringify(blog));
//   } catch (error) {
//     console.log(error);
//   }
// }
function doneEdit(blog) {
    localStorage.setItem("blog", JSON.stringify(blog));
    window.location.href = "../11-user-blog/11-user-blog.html";
}
// function getLocalStorage(): Blog[] | undefined {
//   const getLcPart1 = localStorage.getItem("blog");
//   if (!getLcPart1) throw new Error("get Local Storage is null");
//   const getLcPart2 = JSON.parse(getLcPart1);
//   return getLcPart2;
// }
function getItemsFromLocalStorage(key) {
    var data = localStorage.getItem(key);
    if (!data)
        throw new Error("bad data");
    var _data = JSON.parse(data);
    return _data;
}
// function getLocalStorage(key: string): Blog[] | undefined {
//   const getLcPart1 = localStorage.getItem(key);
//   if (!getLcPart1) throw new Error("can't find get Local Storage");
//   const getLcPart2 = JSON.parse(getLcPart1);
//   return getLcPart2;
// }
// ---------------------------------------------------
