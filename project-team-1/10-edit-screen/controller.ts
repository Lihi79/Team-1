// controller
// ------------

function handleAddItem(evt) {
  evt.preventDefault();

  const blogTitle = document.getElementById("title") as HTMLInputElement;
  const subTitle = document.getElementById("subtitle") as HTMLInputElement;
  const imgUrl = document.getElementById("imgUrl") as HTMLInputElement;
  const blogText = document.getElementById("textarea") as HTMLInputElement;

  const dateUploaded = getCurrentDate();
  const userName = localStorage.getItem("userName") || "";
  console.log(blogTitle, subTitle, imgUrl, blogText);

  blog.push(
    new Blog(
      blogTitle.value,
      subTitle.value,
      blogText.value,
      imgUrl.value,
      dateUploaded,
      userName
    )
  );
  console.log(blog);
  console.log("hello");
  saveLocalStorage(blog);
  renderBlog(blog);
}

function getCurrentDate(): string {
  const currentDate: Date = new Date();

  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth() + 1;
  const day: number = currentDate.getDate();

  const formattedDate: string = `${year}-${month
    .toString()
    .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

  return formattedDate;
}

const userNameValue = localStorage.getItem("userName") || "";
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
                <p class="blog__user-name">${this.userNameValue}</p>
                <p class="blog__date" id="date">${getCurrentDate()}</p>
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
  if (blogRender) blogRender.innerHTML = html;

  return html;
}

function doneEdit(blog: Blog) {
  localStorage.setItem("blog", JSON.stringify(blog));
  window.location.href = "../11-user-blog/11-user-blog.html";
}
