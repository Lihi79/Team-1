// const getLcPart2 = getLocalStorage(key);
// if (getLcPart2) {
//   blog.push(...getLcPart2);
// }
// renderBlog(blog);
var getLcPart2 = getLocalStorage();
if (getLcPart2) {
    blog.push.apply(blog, getLcPart2);
}
renderBlog(blog);
// renderBlog(blog);
// const _blog = getLocalStorage();
// if (_blog) {
//   blog.push(..._blog);
// }
// renderBlog(blog);
