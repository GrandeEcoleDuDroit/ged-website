document.addEventListener("DOMContentLoaded", function () {
    const coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.classList.toggle("collapsed");
            let icon = this.querySelector(".material-symbols-outlined");

            if (content.classList.contains("collapsed")) {
                icon.textContent = "keyboard_arrow_down";
                console.log("collapsed");
            } else {
                icon.textContent = "keyboard_arrow_up";
                console.log("expanded");
            }
        });
    }
});