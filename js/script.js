// ========== Select Elements ==========

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const success = document.getElementById("success");

const area = document.querySelector(".buttons");


// ========== No Button-Position ==========

let noX = 155;
let noY = 70;


// ========== No Button Move Function ==========

function moveNoButton(mouseX, mouseY) {

    const areaRect = area.getBoundingClientRect();

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;


    const buttonCenterX =
        areaRect.left + noX + buttonWidth / 2;

    const buttonCenterY =
        areaRect.top + noY + buttonHeight / 2;

    let directionX = buttonCenterX - mouseX;
    let directionY = buttonCenterY - mouseY;


    // Direction normalize
    const distance = Math.sqrt(
        directionX * directionX +
        directionY * directionY
    );

    if (distance < 80) {

        if (distance === 0) {
            directionX = 1;
            directionY = 1;
        } else {
            directionX = directionX / distance;
            directionY = directionY / distance;
        }

        let newX = noX + directionX * 80;
        let newY = noY + directionY * 80;

        const maxX =
            area.clientWidth - buttonWidth;

        const maxY =
            area.clientHeight - buttonHeight;


        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        if (
            Math.abs(newX - noX) < 80 &&
            Math.abs(newY - noY) < 80
        ) {

            newX =
                Math.random() * maxX;

            newY =
                Math.random() * maxY;
            const newCenterX =
                areaRect.left +
                newX +
                buttonWidth / 2;

            const newCenterY =
                areaRect.top +
                newY +
                buttonHeight / 2;


            const newDistance = Math.sqrt(
                Math.pow(newCenterX - mouseX, 2) +
                Math.pow(newCenterY - mouseY, 2)
            );


            if (newDistance < 80) {

                newX = 0;
                newY = 0;

            }

        }


        // Position update
        noX = newX;
        noY = newY;

        noBtn.style.left = noX + "px";
        noBtn.style.top = noY + "px";


        // Funny animation
        noBtn.classList.remove("run");

        void noBtn.offsetWidth;

        noBtn.classList.add("run");

    }

}


// ========== Mouse Move ==========

document.addEventListener("mousemove", function (event) {

    moveNoButton(
        event.clientX,
        event.clientY
    );

});


// ========== Extra Safety ==========
noBtn.addEventListener("mouseenter", function (event) {

    moveNoButton(
        event.clientX,
        event.clientY
    );

});


// ========== Yes Click ==========

yesBtn.addEventListener("click", function () {

    success.classList.add("show");

    yesBtn.innerHTML = "Yesss! 💖";

});
