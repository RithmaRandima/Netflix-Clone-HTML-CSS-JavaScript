// const tabItemBoxes = document.querySelectorAll(".tab-item");
// const tabContentBoxes = document.querySelectorAll(".tab-content-item");

// console.log(tabContentBoxes);

// tabItemBoxes.forEach((box) => {
//   box.addEventListener("click", (e) => {
//     tabItemBoxes.forEach((box2) => {
//       if (box !== box2) {
//         box2.classList.remove("tab-border");
//       }

//       box.classList.add("tab-border");
//     });
//   });
// });

// console.log(tabContentBoxes);

const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// remove border Function
function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((itemContent) =>
    itemContent.classList.remove("show")
  );
}

// select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");

  // grab content Item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}
// Listen for click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
