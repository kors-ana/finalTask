import createResident from './createResident';
import store from './render';


// localStorage.setItem("store", "[[], [], [], [], []]")

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
    const id = new Date().getTime();
    console.log(id);
    let icon = '<img src="./img/male.svg" alt="">';

    sex == 'Мужской' ? icon = '<img src="./img/male.svg" alt="">' : icon = '<img src="./img/female.svg" alt="">';

    //создаем нового человека
    let newPerson = createResident(name, icon, sex, floor, rooms, additional, quantity, id);

    //проверяем, есть ли на этаже место
    if (store[floor - 1].length > 2) {
        console.log('You cant do that. Its enought')
    } else {

        store[floor - 1].push(newPerson);
        console.log(store);

        // newPerson = JSON.stringify(newPerson);
        // localStorage.setItem(name, newPerson);

        let storeStr = JSON.stringify(store);

        localStorage.setItem("store", storeStr);

        // let mylocalStorage = JSON.parse(localStorage.getItem('store'));
        
        // mylocalStorage[floor - 1].push(newPerson);
        // // console.log(mylocalStorage[floor - 1]); 

        // localStorage.setItem("store", JSON.stringify(mylocalStorage));
        console.log(localStorage);

        // localStorage = JSON.stringify(mylocalStorage);

        

        // localStorage.setItem(name, newPerson);
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
    // const try = localStorage.getItem(name).icon;
    // console.log(try);
    // console.log(localStorage.getItem(name));
    houseFlat.innerHTML = icon;
})

