import "../scss/app.scss";
// const R = require("ramda");
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  
  const numbersArray = [1, 3, 4, 5, 6, 7];
  // const isEven = (n) => n % 2 === 0;
  // const filteredArray = R.filter(isEven, numbersArray);
  const nativeJS = numbersArray.filter(item => item % 2 === 0);
  console.log(nativeJS[0],nativeJS[1]);
  const ul = document.querySelector("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li1Content = document.createTextNode(`${nativeJS[0]}`);
  const li2Content = document.createTextNode(`${nativeJS[1]}`);

  li1.appendChild(li1Content);
  li2.appendChild(li2Content);
  ul.appendChild(li1);
  ul.appendChild(li2);
});
