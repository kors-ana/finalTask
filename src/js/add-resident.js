const store = [];
store.length = 15;

function addResident(name, sex, floor, rooms, additional, quantity) {
    return {
        name: name,
        sex: sex,
        floor: floor,
        rooms: rooms,
        additional: additional,
        quantity: quantity
    }
}

const addBtn = document.querySelector('.add-resident__btn_add');

addBtn.addEventListener('click', function(e) {
    const addResidentPopup = document.querySelector('.add-resident');
    // const fields = addResidentPopup.querySelectorAll('input, select');
    // const values = [];
    // for (let i = 0; i < fields.length; i++) {
    //     values.push(fields[i].value);
    // }
    const name = addResidentPopup.querySelector('.resident-name__field').value;
    const sex = addResidentPopup.querySelector('.resident-info-sex__variant:checked').value;
    const floor = addResidentPopup.querySelector('.resident-floor__field').value;
    const roomsField = addResidentPopup.querySelector('.resident-rooms__field');
    const rooms = roomsField.options[roomsField.selectedIndex].value;
    const additionalArr = addResidentPopup.querySelectorAll('.resident-info-additional__variant:checked');
    const additional = [];
    for (let i = 0; i < additionalArr.length; i++) {
        additional.push(additionalArr[i].value);
    }
    const quantityField = addResidentPopup.querySelector('.resident-quantity__field');
    const quantity = quantityField.options[quantityField.selectedIndex].value;

    console.log(store);
    console.log(addBtn);
    console.log(name);
    console.log(sex);
    console.log(floor);
    console.log(rooms);
    console.log(additional);
    console.log(quantity);
})