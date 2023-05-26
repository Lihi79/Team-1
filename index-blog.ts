// index
// ---------
const _BlogArray = getFromLocalStorage();
if (_BlogArray) {
  BlogArray.push(..._BlogArray);
}
renderToPage(BlogArray);
