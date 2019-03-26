const popupToggler = document.querySelector('.popup-toggler');

popupToggler.addEventListener('click', function(e) {
    let target = e.target;
    console.log(target);

    while (target != popupToggler) {
        if (target.firstElementChild.hasAttribute('checked') && target.classList.contains('popup-variant_add-resident')) {
            console.log('add');
            break;
        }

        if (target.firstElementChild.hasAttribute('checked') && target.classList.contains('popup-variant_filter')) {
            console.log('filter');
            break;
        }

        target = target.parentNode;
        console.log('here');
    }
})

// const addResident = document.querySelector('.popup-variant_add-resident');
// const filter = document.querySelector('.popup-variant_filter');

