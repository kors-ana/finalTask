
const popUpInfo = document.querySelector('.resident-reference');
const closeBtn = document.querySelector('.resident-reference__close-popup');

closeBtn.addEventListener('click', function(e) {
    popUpInfo.classList.remove('resident-reference_active');
})