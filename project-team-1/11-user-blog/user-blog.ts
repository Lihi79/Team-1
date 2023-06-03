const getLcPart2 = getUserLocalStorage();
if (getLcPart2) {
  users.push(...getLcPart2);
}

renderBlog(users);

// const getLcPart2 = getLocalStorage(key);
// if (getLcPart2) {
//   blog.push(...getLcPart2);
// }
// renderBlog(blog);

// renderBlog(blog);
// const _blog = getLocalStorage();
// if (_blog) {
//   blog.push(..._blog);
// }
// renderBlog(blog)
const getLcPart3 = getLocalStorage();
if (getLcPart3) {
  blog.push(...getLcPart3);
  console.log(blog);
}
renderBlog(blog);
