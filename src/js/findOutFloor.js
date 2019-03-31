
const floorsContainer = document.querySelector('.house__floors');
const floors = document.querySelectorAll('.house__floor');
const floorField = document.querySelector('.resident-floor__field');

let floor;

floorsContainer.addEventListener('click', function(e) {
    let target = e.target;

    document.querySelector('.resident-floor__field').removeAttribute('disabled');
    document.querySelector('.add-resident__btn_add').removeAttribute('disabled');

    while (target != floorsContainer) {

        if (target.classList.contains('house__floor')) {

            for (let i = 0; i < floors.length; i++) {
                if (floors[i] == target) {
                    floor = i + 1;
                }
            }
            
            floorField.value = floor;
        }
        target = target.parentNode;
    }
});

