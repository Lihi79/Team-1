function handleAddItem(evt) {
  {
    evt.preventDefault();
    // console.log(evt);
    const title = evt.target.elements.title.value;
    const subtitle = evt.target.elements.subtitle.value;
    const username = evt.target.elements.username.value;
    const text = evt.target.elements.text.value;
    const date = evt.target.elements.date.value;
    blog.push(new Blog(title, subtitle, username, text, date));
    console.log(blog);
  }
}

// view
const blogRender = document.querySelector("#blogRender") as HTMLDivElement;

function renderBlog(): string {
  const html: string = blog
    .map((blogs) => {
      return `    <div class="blog">
    <div class="blog__post">
      <h1 class="blog__title">${blogs.title}</h1>
      <h3 class="blog__subtitle">${blogs.subtitle}</h3>
      <p class="blog__user-name">${blogs.username}</p>
      <p class="blog__date">${blogs.date}</p>
      <p class="blog__text">${blogs.text}</p>
    </div>
    <div class="blog__img">
      <img src="" alt="" width="700px" height="700px" />
    </div>
  </div>`;
    })
    .join(" ");
  blogRender.innerHTML = html;
}
