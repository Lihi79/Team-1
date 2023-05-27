// model
class Blog {
  uid: string;
  constructor(
    public blogTitle: string,
    public subTitle: string,
    // public username: string,
    public blogText: string
  ) // public date: Function
  {
    this.uid = uid();
  }
}
const blog: Blog[] = [];

function uid(): string {
  return `id- ${Math.random()}`;
}

function handleAddItem(evt) {
  {
    evt.preventDefault();
    console.log(evt);
    const blogTitle = evt.target.elements.blogTitle.value;
    const subTitle = evt.target.elements.subTitle.value;
    // const username = evt.target.elements.username.value;
    const blogText = evt.target.elements.blogText.value;
    // const date = evt.target.elements.date.value;
    blog.push(new Blog(blogTitle, subTitle, blogText));
    console.log(blog);
  }
}

// view
const blogRender = document.querySelector("#blogRender") as HTMLDivElement;
// <p class="blog__user-name">${blogs.username}</p>
// <p class="blog__date">${blogs.date}</p>
function renderBlog(blog: Blog[]): string {
  const html: string = blog
    .map((blogs) => {
      return `    <div class="blog">
    <div class="blog__post">
      <h1 class="blog__title">${blogs.blogTitle}</h1>
      <h3 class="blog__subtitle">${blogs.subTitle}</h3>

   
      <p class="blog__text">${blogs.blogText}</p>
    </div>
    <div class="blog__img">
      <img src="" alt="" width="700px" height="700px" />
    </div>
  </div>`;
    })
    .join(" ");
  blogRender.innerHTML = html;
  return html;
}
