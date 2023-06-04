// helper
// ---------
function uid() {
    return "id- " + Math.random();
}
function renderToScreen() {
    blogRender.innerHTML = renderBlog(blog);
}
function saveLocalStorage(blog) {
    localStorage.setItem("blog", JSON.stringify(blog));
}
function getLocalStorage() {
    var getLcPart1 = localStorage.getItem("blog") || "[]";
    var getLcPart2 = JSON.parse(getLcPart1);
    console.log(getLcPart2);
    return getLcPart2;
}
