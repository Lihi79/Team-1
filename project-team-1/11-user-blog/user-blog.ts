const getLcPart2 = getUserLocalStorage();
if (getLcPart2) {
  users.push(...getLcPart2);
}

renderBlog(users);

const getLcPart3 = getLocalStorage();
if (getLcPart3) {
  blog.push(...getLcPart3);
  console.log(blog);
}
renderBlog(blog);
