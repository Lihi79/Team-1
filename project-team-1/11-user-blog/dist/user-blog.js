var getLcPart2 = getUserLocalStorage();
if (getLcPart2) {
    users.push.apply(users, getLcPart2);
}
renderBlog(users);
var getLcPart3 = getLocalStorage();
if (getLcPart3) {
    blog.push.apply(blog, getLcPart3);
    console.log(blog);
}
renderBlog(blog);
