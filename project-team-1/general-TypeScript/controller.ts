// class Blog {
//   uid: string;
//   constructor(
//     public blogTitle: string,
//     public subTitle: string,
//     public blogText: string,
//     // public date: Function
//     public imgUrl: string
//   ) {
//     this.uid = uid();
//   }
// }
// const blog: Blog[] = [];
// // -----------------------------------
// // -----------------------------------
// const blogRender = document.querySelector("#blogRender") as HTMLDivElement;
// // ---------בעמוד 10 מכובה איפה שהיוזר רושם את פרטי הבלוג שרוצה להעלות
// // ובעמוד 11 לא מכובה  ושם מופיע מה שרשמנו בעומד 10 יחד עם שם היוזר והתאריך
// const userRender = document.querySelector("#userRender") as HTMLDivElement;
// // בעמוד 11 לא מכובה  רוצה שבעזרת זה נוכל לגרום לשם של היוזר להופיע על המסך
// const img = document.querySelector("#upload-img") as HTMLImageElement;
// // ---------בעמוד 12-----לא מכובה-בלוגים פיקטיביים שכביכול היוזר העלה כבר-----
// const signUpButton = document.querySelector("#singUp") as HTMLButtonElement;
// // ----- בעמוד 9-----לא מכובה הרשמות לאתר וזה גם של האונסבמיט של הפורם

// // -----------------------------------
// function uid(): string {
//   return `id- ${Math.random()}`;
// }
// // -----------------------------------
// class User {
//   uid: string;
//   constructor(
//     public userName: string,
//     private password: string,
//     public email: string
//   ) {
//     this.uid = uid();
//   }
// }
// const users: User[] = [];

// // -----------------------------------

// const formBox = document.getElementById("form-box");
// const formClass = document.getElementById("form-class");
// // -------עמוד 9 שייך לפורם-----
// const userProfile = document.getElementById("userProfile");
// const showUserName = document.getElementById("showUserName");
// // ---עמוד 1 דף הבית, צריכה שיופיע על הדף שימשוך מלוקאל סטורג'--

// // const showUserProfile = (u) => {
// //   showUserName!.textContent = `hello:${u.loginName}`;
// // };
// // formClass!.addEventListener("submit", (e) => {
// //   e.preventDefault();
// //   const userName = document.getElementById("loginName") as HTMLInputElement;
// //   const userPassword = document.getElementById(
// //     "loginPassword"
// //   ) as HTMLInputElement;
// //   const loginName = userName.value;
// //   const loginPassword = userPassword.value;

// //   const user = { loginName };
// //   localStorage.setItem("user", JSON.stringify(user));
// //   showUserProfile(user);
// // });

// // const savedUser = localStorage.getItem("user");
// // if (savedUser) {
// //   const user = JSON.parse(savedUser);
// //   showUserProfile(user);
// // } else {
// //   alert("Something is wrong! ' try again");
// // }
// // -----------------------------------

// // user sign up
// function signUp(evt) {
//   const userName = evt.target.elements.userName.value;
//   const password = evt.target.elements.password.value;
//   const email = evt.target.elements.email.value;
//   users.push(new User(userName, password, email));
// }

// // function saveUserLocalStorage(user: User[]) {
// //   localStorage.setItem("user", JSON.stringify(user));
// // }

// function getUserLocalStorage(): User[] | undefined {
//   const getLcPart1 = localStorage.getItem("user");
//   if (!getLcPart1) throw new Error("get Local Storage is null");
//   const getLcPart2 = JSON.parse(getLcPart1);
//   return getLcPart2;
// }

// function signUpBtn(user: User[]) {
//   console.log("hello");

//   localStorage.setItem("user", JSON.stringify(user));
//   window.location.href = "../1-index.html";
// }
// // --------------------------
// function handleAddItem(evt) {
//   evt.preventDefault();
//   // console.log(evt);

//   // const savedUser = localStorage.getItem("user");
//   // if (savedUser) {
//   //   const user = JSON.parse(savedUser);
//   //   showUserProfile(user);
//   // } else {
//   //   alert("try again");
//   // }
//   const blogTitle = evt.target.elements.blogTitle.value;
//   const subTitle = evt.target.elements.subTitle.value;
//   const blogText = evt.target.elements.blogText.value;
//   const imgUrl = evt.target.elements.imgUrl.value;
//   blog.push(new Blog(blogTitle, subTitle, blogText, imgUrl));

//   // saveLocalStorage("data", blog);
//   saveInToLocalStorage("blog", blog);
//   renderBlog(blog);
// }

// // user sign up
// // <p>hello${this.userName}</p>
// // <p>hello${savedUser}</p>
// function renderUser(users: User[]): string {
//   const html2: string = users
//     .map((us) => {
//       return `
//       <div class="container">
//         <div class="user">
//           <div class="user__post">
//             <div class="user__text">

//               <h1 class="blog__title" id="title">${us.userName}</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//   </body>
//     `;
//     })
//     .join(" ");
//   // renderToScreen();
//   // renderToScreen(blogRender, html);
//   userRender.innerHTML = html2;

//   return html2;
// }
// // ------------------------------------------------------------
// // <p>hello${this.userName}</p>
// // <p>hello${savedUser}</p>
// function renderBlog(blog: Blog[]): string {
//   alert("ef");
//   const html: string = blog
//     .map((blogs) => {
//       return `
//       <div class="container">
//         <div class="blog">
//           <div class="blog__post">
//             <div class="blog__text">
//               <h1 class="blog__title" id="title">${blogs.blogTitle}</h1>
//               <h3 class="blog__subtitle" id="subtitle">${blogs.subTitle}</h3>

//               <div class="blog__name-date">
//                 <p class="blog__user-name">${this.userNameValue}</p>
//                 <p class="blog__date" id="date">${getCurrentDate()}</p>
//               </div>

//               <div class="blog__img">
//                 <img
//                   src="${blogs.imgUrl}"
//                   alt=""
//                   id="upload-img"
//                 />
//               </div>

//               <p class="blog__p">${blogs.blogText}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//   </body>
//     `;
//     })
//     .join(" ");

//   blogRender.innerHTML = html;

//   return html;
// }
// // function renderBlog(blog: Blog[]): string {
// //   const html: string = blog
// //     .map((blogs) => {
// //       return `
// //       <div class="container">
// //         <div class="blog">
// //           <div class="blog__post">
// //             <div class="blog__text">

// //               <h1 class="blog__title" id="title">${blogs.blogTitle}</h1>
// //               <h3 class="blog__subtitle" id="subtitle">${blogs.subTitle}</h3>

// //               <div class="blog__name-date">
// //                 <p class="blog__user-name">--user name--</p>
// //                 <p class="blog__date" id="date">--date--</p>
// //               </div>

// //               <div class="blog__img">
// //                 <img
// //                   src="${blogs.imgUrl}"
// //                   alt=""
// //                   id="upload-img"
// //                 />
// //               </div>

// //               <p class="blog__p">${blogs.blogText}</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //   </body>
// //     `;
// //     })
// //     .join(" ");
// //   // renderToScreen();
// //   // renderToScreen(blogRender, html);
// //   blogRender.innerHTML = html;

// //   return html;
// // }

// function renderToScreen() {
//   blogRender.innerHTML = renderBlog(blog);
//   userRender.innerHTML = renderUser(users);
// }

// function saveInToLocalStorage(key, arr: any[]) {
//   localStorage.setItem(key, JSON.stringify(arr));
// }

// function getFromLocalStorage(key: string): any[] | undefined {
//   const data = localStorage.getItem(key);
//   if (!data) throw new Error("bad data");
//   const _data = JSON.parse(data);
//   return _data;
// }

// // function saveLocalStorage(key, blog: Blog[]) {
// //   try {
// //     if (!blog) {
// //       throw new Error("item i not valid");
// //     }
// //     localStorage.setItem(key, JSON.stringify(blog));
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // שמתי בהערה
// function doneEdit(blog: Blog) {
//   localStorage.setItem("blog", JSON.stringify(blog));
//   // window.location.href = "../11-user-blog/11-user-blog.html";
// }

// // function getLocalStorage(): Blog[] | undefined {
// //   const getLcPart1 = localStorage.getItem("blog");
// //   if (!getLcPart1) throw new Error("get Local Storage is null");
// //   const getLcPart2 = JSON.parse(getLcPart1);
// //   return getLcPart2;
// // }

// // function getLocalStorage(key: string): Blog[] | undefined {
// //   const getLcPart1 = localStorage.getItem(key);
// //   if (!getLcPart1) throw new Error("can't find get Local Storage");
// //   const getLcPart2 = JSON.parse(getLcPart1);
// //   return getLcPart2;
// // }

// // ---------------------------------------------------
