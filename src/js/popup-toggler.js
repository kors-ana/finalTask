const popupToggler = document.querySelector('.popup-toggler');
const addResidentBlock = document.querySelector('.add-resident');
const filterBlock = document.querySelector('.filter');

popupToggler.addEventListener('click', function(e) {
    let target = e.target;

    if (target.classList.contains('popup-variant_filter')) {
        addResidentBlock.classList.remove('active');
        filterBlock.classList.add('active');
    }

    if (target.classList.contains('popup-variant_add-resident')) {
        filterBlock.classList.remove('active');
        addResidentBlock.classList.add('active');
    }

})

