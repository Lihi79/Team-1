// // model
// // --------
// interface Create {
//   name: string;
//   blogTitle: string;
//   date: Date;
//   blogText: string;
// }

// class Blog implements Create {
//   serialNum: string;
//   constructor(
//     public name: string,
//     public blogTitle: string,
//     public date: Date,
//     public blogText: string
//   ) {
//     this.serialNum = serialNumber();
//   }
// }
// const BlogArray: Blog[] = [];

// // view
// // --------

// const root = document.querySelector("#root") as HTMLElement;

// // controller
// // ------------

// function form(evt) {
//   try {
//     evt.preventDefault();
//     console.log("evt:", evt);

//     const name = evt.target.elements.name.value;
//     const blogTitle = evt.target.elements.blogTitle.value;
//     const date = evt.target.elements.date.value;
//     const blogText = evt.target.elements.blogText.value;
//     BlogArray.push(new Blog(name, blogTitle, date, blogText));

//     renderToPage(BlogArray);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function renderToPage(BlogArray: Blog[]): string {
//   try {
//     if (!BlogArray || !Array.isArray(BlogArray))
//       throw new Error(`BlogArray is not an array`);

//     const html: string = BlogArray.map((ca) => {
//       return `
//             <div class="onScreen">
//                   <h2>blog info: </h2>
//                   <h2 class="onScreen2__h2">${ca.blogTitle}</h2>
//                   <h2 class="onScreen2__h2">${ca.name}  , ${ca.date}  </h2>
//                   <h2 class="onScreen2__h2"> ${ca.blogText}</h2>
//               </div>
//               `;
//     }).join(" ");
//     root.innerHTML = html;
//     return html;
//   } catch (error) {
//     console.log(error);
//     return "";
//   }
// }

// // helper
// // ---------

// function serialNumber(): string {
//   return `Serial Number: ${Math.random()}`;
// }

// function render() {
//   if (!root) throw new Error(`root not found`);
//   root.innerHTML = renderToPage(BlogArray);
// }

// function saveInLocalStorage(BlogArray: Blog[]) {
//   try {
//     if (!BlogArray) {
//       throw new Error(`cant find BlogArray`);
//     } else {
//       localStorage.setItem("BlogArray", JSON.stringify(BlogArray));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// function getFromLocalStorage(): Blog[] | undefined {
//   const information = localStorage.getItem("BlogArray");

//   if (!information) throw new Error(`cant find information`);
//   const _BlogArray = JSON.parse(information);

//   return _BlogArray;
// }
