const store = [[], [], [], [], []];

export default store;

function addResident(name, icon, sex, floor, rooms, additional, quantity) {
    return {
        name: name,
        icon: icon,
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

    //собираем все значения с полей
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
    let icon = '<img src="./img/male.svg" alt="">';
    // if(sex == 'female') {
    //     const icon = '<img src="./img/female.svg" alt="">';
    // }
    sex == 'Мужской' ? icon = '<img src="./img/male.svg" alt="">' : icon = '<img src="./img/female.svg" alt="">';
    console.log(icon);
    
    //создаем нового человека
    let newPerson = addResident(name, icon, sex, floor, rooms, additional, quantity);

    //проверяем, есть ли на этаже место
    if (store[floor - 1].length > 2) {
        console.log('You cant do that. Its enought')
    } else {
        store[floor - 1].push(newPerson);
    }

    //получаем коллекцию всех этажей
    const floors = document.querySelectorAll('.house__floor');

    //получаем нужный нам этаж в доме
    const houseFloor = floors[floor - 1];

    //получаем на этом этаже все квартиры
    const houseFlats = houseFloor.querySelectorAll('.house__flat');

    //store[floor - 1] = нужному массиву
    //его индекс lenght - 1 = квартире, в которую поселили человека
    const houseFlat = houseFlats[store[floor - 1].length - 1];

    //добавляем иконку человека в дом
    houseFlat.innerHTML = icon;
    // sex == 'male' ? houseFlat.innerHTML = '<img src="./img/male.svg" alt="">' : houseFlat.innerHTML = '<img src="./img/female.svg" alt="">'
    
    console.log(store);
    // console.log(store);
    // console.log(addBtn);
    // console.log(name);
    // console.log(sex);
    // console.log(floor);
    // console.log(rooms);
    // console.log(additional);
    // console.log(quantity);
})
