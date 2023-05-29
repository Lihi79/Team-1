function handleAddItem(evt) {
  evt.preventDefault();
  // console.log(evt);
  const blogTitle = evt.target.elements.blogTitle.value;
  const subTitle = evt.target.elements.subTitle.value;
  const blogText = evt.target.elements.blogText.value;
  const imgUrl = evt.target.elements.imgUrl.value;
  blog.push(new Blog(blogTitle, subTitle, blogText, imgUrl));

  // saveLocalStorage("data", blog);
  saveLocalStorage(blog);
  renderBlog(blog);
}

// user sign up

// ------------------------------------------------------------

function renderBlog(blog: Blog[]): string {
  const html: string = blog
    .map((blogs) => {
      return `    
      <div class="container">
        <div class="blog">
          <div class="blog__post">
            <div class="blog__text">
              <h1 class="blog__title" id="title">${blogs.blogTitle}</h1>
              <h3 class="blog__subtitle" id="subtitle">${blogs.subTitle}</h3>

              <div class="blog__name-date">
                <p class="blog__user-name">--user name--</p>
                <p class="blog__date" id="date">--date--</p>
              </div>

              <div class="blog__img">
                <img
                  src="${blogs.imgUrl}"
                  alt=""
                  id="upload-img"
                />
              </div>

              <p class="blog__p">${blogs.blogText}</p>
            </div>
          </div>
        </div>
      </div>
  </body>
    `;
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

function saveLocalStorage(blog: Blog[]) {
  localStorage.setItem("blog", JSON.stringify(blog));
}

// function saveLocalStorage(key, blog: Blog[]) {
//   try {
//     if (!blog) {
//       throw new Error("item i not valid");
//     }
//     localStorage.setItem(key, JSON.stringify(blog));
//   } catch (error) {
//     console.log(error);
//   }
// }

function doneEdit(blog: Blog) {
  localStorage.setItem("blog", JSON.stringify(blog));
  window.location.href = "../11-user-blog/11-user-blog.html";
}

function getLocalStorage(): Blog[] | undefined {
  const getLcPart1 = localStorage.getItem("blog");
  if (!getLcPart1) throw new Error("get Local Storage is null");
  const getLcPart2 = JSON.parse(getLcPart1);
  return getLcPart2;
}

// function getItemsFromLocalStorage(key: string): Blog[] | undefined {
//   const data = localStorage.getItem(key);
//   if (!data) throw new Error("bad data");
//   const _blog = JSON.parse(data);
//   return _blog;
// }
// function getLocalStorage(key: string): Blog[] | undefined {
//   const getLcPart1 = localStorage.getItem(key);
//   if (!getLcPart1) throw new Error("can't find get Local Storage");
//   const getLcPart2 = JSON.parse(getLcPart1);
//   return getLcPart2;
// }

// ---------------------------------------------------
