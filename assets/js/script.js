debugger;
var toggler = document.querySelectorAll(".root");
Array.from(toggler).forEach(item => {
    item.addEventListener("click", () => {
        item.parentElement.querySelector(".children").classList.toggle("active");
        item.classList.toggle("root-down");
    });
});

Array.from(toggler).forEach(item => {
    item.addEventListener("click", () => {
        item.parentElement.querySelector(".children-2").classList.toggle("active-2");
        item.classList.toggle("root-down");
    });
});