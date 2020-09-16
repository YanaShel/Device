var slideButtons = document.querySelectorAll('.dot-item');
var slides = document.querySelectorAll('.slide');

if (slides != null) {
    var removeClass = function (arr, className) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].classList.remove(className);
        }
    };

    var addButtonClickHandler = function (slide, btn) {
        btn.addEventListener('click', function (evt) {
            evt.preventDefault();
            removeClass(slides, 'slide-show');
            removeClass(slideButtons, 'dot-item-checked');
            slide.classList.add('slide-show');
            btn.classList.add('dot-item-checked');
        });
    };

    for (var i = 0; i < slideButtons.length; i++) {
        addButtonClickHandler(slides[i], slideButtons[i]);
    }
}

var conditionsBtn = document.querySelectorAll('.condition-btn');
var conditionsList = document.querySelectorAll('.condition-item');
var conditionsSlide = document.querySelectorAll('.condition-slide');


if (conditionsSlide != null) {

    var addLinkClickHandler = function (slide, btn, link) {
        btn.addEventListener('click', function (evt) {
            evt.preventDefault();
            removeClass(conditionsSlide, 'slide-current');
            removeClass(conditionsList, 'link-current');
            removeClass(conditionsBtn, 'btn-current');
            slide.classList.add('slide-current');
            btn.classList.add('btn-current');
            link.classList.add('link-current');
        });
    };

    for (var i = 0; i < conditionsBtn.length; i++) {
        addLinkClickHandler(conditionsSlide[i], conditionsBtn[i], conditionsList[i]);
    }
}