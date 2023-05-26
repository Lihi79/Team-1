// index
// ---------
var _BlogArray = getFromLocalStorage();
if (_BlogArray) {
    BlogArray.push.apply(BlogArray, _BlogArray);
}
renderToPage(BlogArray);
