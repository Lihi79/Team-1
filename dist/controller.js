function handleAddItem(evt) {
    {
        evt.preventDefault();
        // console.log(evt);
        var title = evt.target.elements.title.value;
        var subtitle = evt.target.elements.subtitle.value;
        var username = evt.target.elements.username.value;
        var text = evt.target.elements.text.value;
        var date = evt.target.elements.date.value;
        blog.push(new Blog(title, subtitle, username, text, date));
        console.log(blog);
    }
}
// view
var blogRender = document.querySelector("#blogRender");
function renderBlog() {
    var html = blog
        .map(function (blogs) {
        return "    <div class=\"blog\">\n    <div class=\"blog__post\">\n      <h1 class=\"blog__title\">" + blogs.title + "</h1>\n      <h3 class=\"blog__subtitle\">" + blogs.subtitle + "</h3>\n      <p class=\"blog__user-name\">" + blogs.username + "</p>\n      <p class=\"blog__date\">" + blogs.date + "</p>\n      <p class=\"blog__text\">" + blogs.text + "</p>\n    </div>\n    <div class=\"blog__img\">\n      <img src=\"\" alt=\"\" width=\"700px\" height=\"700px\" />\n    </div>\n  </div>";
    })
        .join(" ");
    blogRender.innerHTML = html;
}
