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
