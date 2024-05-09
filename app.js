const ratings = document.querySelectorAll(".rating");
const container = document.querySelector(".container");
const sendBtn = document.querySelector(".btn");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfy";

container.addEventListener("click", e => {
    if (e.target.parentNode.classList.contains("rating")) {
        
        removeActive();
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
});

sendBtn.addEventListener("click", () => {
    panel.innerHTML = `
        <p class="heart">💖</p>
        <strong>Thank You</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
    `
})

const removeActive = () => {
    for(let i=0; i<ratings.length; i++) {
        ratings[i].classList.remove("active");
    }
}