function handleAddItem(evt) {
    evt.preventDefault();
    console.log(evt);
    var blogTitle = evt.target.elements.blogTitle.value;
    var subTitle = evt.target.elements.subTitle.value;
    // const username = evt.target.elements.username.value;
    var blogText = evt.target.elements.blogText.value;
    // const date = evt.target.elements.date.value;
    blog.push(new Blog(blogTitle, subTitle, blogText));
    // saveLocalStorage("data", blog);
    renderBlog(blog);
}
// ------------------------------------------------------------
// <p class="blog__user-name">${blogs.username}</p>
// <p class="blog__date">${blogs.date}</p>
function renderBlog(blog) {
    var html = blog
        .map(function (blogs) {
        return "    \n       <div class=\"blog\">\n           <div class=\"blog__post\">\n               <h1 class=\"blog__title\">" + blogs.blogTitle + "</h1>\n               <h3 class=\"blog__subtitle\">" + blogs.subTitle + "</h3>\n               <p class=\"blog__text\">" + blogs.blogText + "</p>\n           </div>\n           <div class=\"blog__img\">\n               <img src=\"\" alt=\"\" width=\"700px\" height=\"700px\" />\n           </div>\n       </div>";
    })
        .join(" ");
    renderToScreen();
    // renderToScreen(blogRender, html);
    // blogRender.innerHTML = html;
    return html;
}
function renderToScreen() {
    blogRender.innerHTML = renderBlog(blog);
}
// function renderToScreen(element: HTMLDivElement, date: string) {
//   element.innerHTML = date;
// }
function saveLocalStorage(blog) {
    localStorage.setItem("blog", JSON.stringify(blog));
}
// function saveLocalStorage(key: string, blog: Blog[] | string) {
//   localStorage.setItem(key, JSON.stringify(blog));
// }
function getLocalStorage() {
    var getLcPart1 = localStorage.getItem("blog");
    if (!getLcPart1)
        throw new Error("get Local Storage is null");
    var getLcPart2 = JSON.parse(getLcPart1);
    return getLcPart2;
}
// function getLocalStorage(key: string): Blog[] | undefined {
//   const getLcPart1 = localStorage.getItem(key);
//   if (!getLcPart1) throw new Error("can't find get Local Storage");
//   const getLcPart2 = JSON.parse(getLcPart1);
//   return getLcPart2;
// }
// ---------------------------------------------------
// function doneEdit(mealType: string) {
//   console.log(textArea.value);
//   localStorage.setItem(mealType, textArea.value);
//   window.location.href = "1-index.html";
//1. Read text from html element
//2. Save to local storage
//   localStorage.setItem("bf", text);
//3. redirect to main page
//   window.location.href = "/1-....html";
