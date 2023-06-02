var getLcPart2 = getLocalStorage();
if (getLcPart2) {
    blog.push.apply(blog, getLcPart2);
}
renderBlog(blog);
