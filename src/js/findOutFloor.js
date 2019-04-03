
const floorsContainer = document.querySelector('.house__floors');
const floors = document.querySelectorAll('.house__floor');
const floorField = document.querySelectorAll('.resident-floor__field');
const tabAdd = document.querySelector('.popup-variant_add');
const tabFilter = document.querySelector('.popup-variant_filter');

let floor;

floorsContainer.addEventListener('click', function(e) {
    
    const tab = document.querySelector('.popup-variant:checked').value;

    let target = e.target;

    document.querySelector('.add-resident__btn_add').removeAttribute('disabled');

    while (target != floorsContainer) {

        if (target.classList.contains('house__floor') && tab == tabAdd.value) {

            document.querySelector('.resident-floor__field').removeAttribute('disabled');

            for (let i = 0; i < floors.length; i++) {
                if (floors[i] == target) {
                    floor = i + 1;
                }
            }
            floorField[0].value = floor;

        } else {
            document.querySelector('.resident-floor__field_filter').removeAttribute('disabled');

            for (let i = 0; i < floors.length; i++) {
                if (floors[i] == target) {
                    floor = i + 1;
                }
            }
            floorField[1].value = floor;
        }

        target = target.parentNode;
    }
});

