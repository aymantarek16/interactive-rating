// Add active class on the current li element
let li = document.querySelectorAll(".list li");

li.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    li.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

//  Switch to ThankYou Section When Submit Button is Clicked
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  document.querySelector(".rating").style.display = "none";
  document.querySelector(".thankYou").style.display = "flex";
});

// active disabled attribute on the submit button when the rating is not selected
window.addEventListener("load", () => {
  submitBtn.setAttribute("disabled", true);
  // remove disabled attribute when the user select a rating
  li.forEach((ele) => {
    ele.addEventListener("click", () => {
      submitBtn.removeAttribute("disabled");
    });
  });
});
