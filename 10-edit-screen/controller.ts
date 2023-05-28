function handleAddItem(evt) {
  evt.preventDefault();
  console.log(evt);
  const blogTitle = evt.target.elements.blogTitle.value;
  const subTitle = evt.target.elements.subTitle.value;
  // const username = evt.target.elements.username.value;
  const blogText = evt.target.elements.blogText.value;
  // const date = evt.target.elements.date.value;
  blog.push(new Blog(blogTitle, subTitle, blogText));

  // saveLocalStorage("data", blog);

  renderBlog(blog);
}

// ------------------------------------------------------------

// <p class="blog__user-name">${blogs.username}</p>
// <p class="blog__date">${blogs.date}</p>

function renderBlog(blog: Blog[]): string {
  const html: string = blog
    .map((blogs) => {
      return `    
       <div class="blog">
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
  // renderToScreen();
  // renderToScreen(blogRender, html);
  blogRender.innerHTML = html;

  return html;
}

function renderToScreen() {
  blogRender.innerHTML = renderBlog(blog);
}

// function renderToScreen(element: HTMLDivElement, date: string) {
//   element.innerHTML = date;
// }
function saveLocalStorage(blog: Blog[]) {
  localStorage.setItem("blog", JSON.stringify(blog));
}

// function saveLocalStorage(key: string, blog: Blog[] | string) {
//   localStorage.setItem(key, JSON.stringify(blog));
// }

function getLocalStorage(): Blog[] | undefined {
  const getLcPart1 = localStorage.getItem("blog");
  if (!getLcPart1) throw new Error("get Local Storage is null");
  const getLcPart2 = JSON.parse(getLcPart1);
  return getLcPart2;
}

// function getLocalStorage(key: string): Blog[] | undefined {
//   const getLcPart1 = localStorage.getItem(key);
//   if (!getLcPart1) throw new Error("can't find get Local Storage");
//   const getLcPart2 = JSON.parse(getLcPart1);
//   return getLcPart2;
// }

// ---------------------------------------------------
// function doneEdit(mealType: string) {
//   console.log(textArea.value);
//   localStorage.setItem(mealType, textArea.value);

//   window.location.href = "1-index.html";

//1. Read text from html element
//2. Save to local storage
//   localStorage.setItem("bf", text);
//3. redirect to main page
//   window.location.href = "/1-....html";
