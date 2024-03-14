const tabElements = document.querySelectorAll(".tab");
const tabContentElems = document.querySelectorAll(".tab-content");

const handleTabClicks = (id) => {
  tabElements[id - 1].classList.add("tab-border");
  tabContentElems[id - 1].classList.add("show");

  for (let i = 0; i < tabContentElems.length; i++) {
    if (i !== id - 1) {
      tabElements[i].classList.remove("tab-border");
      tabContentElems[i].classList.remove("show");
    }
  }
};

tabElements.forEach((tab) => {
  // Add the event listener to the icon present inside each tab
  tab.children[0].addEventListener("click", () => {
    if (tab.id === "tab-1") handleTabClicks(1);
    else if (tab.id === "tab-2") handleTabClicks(2);
    else if (tab.id === "tab-3") handleTabClicks(3);
  });
});
