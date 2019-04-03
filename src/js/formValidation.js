export default function validateForm() {
    const addResidentPopup = document.querySelector('.add-resident');
    const name = addResidentPopup.querySelector('.resident-name__field');
    const sex = addResidentPopup.querySelector('.resident-info-sex__variant:checked').value;
    const floor = addResidentPopup.querySelector('.resident-floor__field').value;
    const roomsField = addResidentPopup.querySelector('.resident-rooms__field');
    const rooms = roomsField.options[roomsField.selectedIndex].value;
    const flat = undefined;
    const additionalArr = addResidentPopup.querySelectorAll('.resident-info-additional__variant:checked');
    let additional = [];
    for (let i = 0; i < additionalArr.length; i++) {
        additional.push(additionalArr[i].value);
    }
    additional = additional.join(', ');

    const quantityField = addResidentPopup.querySelector('.resident-quantity__field');
    const quantity = quantityField.options[quantityField.selectedIndex].value;

    
    if (name.value.length > 15) {
        console.log(name.value.length);
        name.setAttribute('data-content','bar');
        return false;
    }
    
}
