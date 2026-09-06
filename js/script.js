// ========== Select Elements ==========

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const success = document.getElementById("success");

function moveNoButton() {

    const area = document.querySelector(".buttons");

    const areaWidth = area.clientWidth;
    const areaHeight = area.clientHeight;

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const randomX = Math.random() * (areaWidth - buttonWidth);
    const randomY = Math.random() * (areaHeight - buttonHeight);
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.right = "auto";
}


noBtn.addEventListener("mouseenter", function () {

    moveNoButton();

});


// ========== Yes Button Click ==========

yesBtn.addEventListener("click", function () {

    success.classList.add("show");

});
