var link = document.querySelector('.link-popup');
var writeUsPopup = document.querySelector('.write-us-popup');
var close = writeUsPopup.querySelector('.modal-close-btn');

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-show");
})