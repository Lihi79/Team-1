function uid(): string {
  return `id- ${Math.random()}`;
}

const getLcPart2 = getLocalStorage("blog");
if (getLcPart2) {
  blog.push(...getLcPart2);
}

renderBlog(blog);
const getUser = getLocalStorage("users");
if (getUser) {
  users.push(...getUser);
}
renderBlog(users);
