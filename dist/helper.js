function uid() {
    return "id- " + Math.random();
}
var getLcPart2 = getLocalStorage("blog");
if (getLcPart2) {
    blog.push.apply(blog, getLcPart2);
}
renderBlog(blog);
var getUser = getLocalStorage("users");
if (getUser) {
    users.push.apply(users, getUser);
}
renderBlog(users);
