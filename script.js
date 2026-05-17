let navButton = document.querySelectorAll(".navigation a");

navButton.forEach(element => {
    element.addEventListener("click", function () {


        let targetId = this.getAttribute("href");
        let targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.classList.add("bright");
            setTimeout(() => {

                targetSection.classList.remove("bright");

            }, 600);
        }
    });
});