const store = [['','',''], [], [], [], []];


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

    let newPerson = addResident(name, sex, floor, rooms, additional, quantity);

    if (store[floor - 1].length > 2) {
        console.log('You cant do that. Its enought')
    } else {
        store[floor - 1] = newPerson;
    }

    const floors = document.querySelectorAll('.house__floor');

    const houseFloor = floors[floor - 1];
    const houseFlats = houseFloor.querySelectorAll('.house__flat');
    const houseFlat = houseFlats[store[floor - 1].length - 1];
    houseFlat.innerHTML = 'hello';
    

    // console.log(store);
    // console.log(addBtn);
    // console.log(name);
    // console.log(sex);
    // console.log(floor);
    // console.log(rooms);
    // console.log(additional);
    // console.log(quantity);
})

const flats = document.querySelector('.house__floors');

flats.addEventListener('click', function(e) {
    let target = e.target;

    if (target.classList.contains('house__flat')) {
        let id = target.getAttribute('id');

        let ourPerson = store[id]
    }
})