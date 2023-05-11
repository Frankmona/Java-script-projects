//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // using the parent element was use to target the parent element*2
    const questions = e.currentTarget.parentElement.parentElement;
    questions.classList.toggle("show-text");
    //    OR we can use this below
    // if (questions.classList.contains("show-text")) {
    //   questions.classList.remove("show-text");
    // } else {
    //   questions.classList.add("show-text");
    // }
  });
});
