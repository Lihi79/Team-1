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
// ------------------------------------------------------------

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

function renderToScreen() {
  renderBlog.innerHTML = renderBlog(blog);
}
function saveToLocalStorage(key, items: Blog[]) {
  localStorage.setItem(key, JSON.stringify(blog));
}

// function doneEdit(mealType: string) {
//   console.log(textArea.value);
//   localStorage.setItem(mealType, textArea.value);

//   window.location.href = "1-index.html";

//1. Read text from html element
//2. Save to local storage
//   localStorage.setItem("bf", text);
//3. redirect to main page
//   window.location.href = "/1-....html";
