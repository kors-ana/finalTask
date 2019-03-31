import Resident from './createResident';
import {render} from './render';
import arrayOfPersons from './store';   

const addBtn = document.querySelector('.add-resident__btn_add');

addBtn.addEventListener('click', function(e) {
    const addResidentPopup = document.querySelector('.add-resident');

    //собираем все значения с полей
    const name = addResidentPopup.querySelector('.resident-name__field').value;
    const sex = addResidentPopup.querySelector('.resident-info-sex__variant:checked').value;
    const floor = addResidentPopup.querySelector('.resident-floor__field').value;
    const roomsField = addResidentPopup.querySelector('.resident-rooms__field');
    const rooms = roomsField.options[roomsField.selectedIndex].value;
    const flat = undefined;
    const additionalArr = addResidentPopup.querySelectorAll('.resident-info-additional__variant:checked');
    const additional = [];
    for (let i = 0; i < additionalArr.length; i++) {
        additional.push(additionalArr[i].value);
    }
    const quantityField = addResidentPopup.querySelector('.resident-quantity__field');
    const quantity = quantityField.options[quantityField.selectedIndex].value;
    const id = 0;
    console.log(id);
    let icon = '<img src="./img/male.svg" alt="">';

    sex == 'Мужской' ? icon = '<img src="./img/male.svg" alt="">' : icon = '<img src="./img/female.svg" alt="">';

    //создаем нового человека
    let newPerson = new Resident(name, icon, sex, floor, flat, rooms, additional, quantity, id);

    //проверяем, есть ли на этаже место
    const maxFlats = arrayOfPersons.filter((element) => {
        if (element.floor === floor) {
            return element;
        }
    }).length;

    if (maxFlats >= 3) {
        console.log('too much');
    } else {
        newPerson.flat = maxFlats;
        newPerson.id = (newPerson.flat + 1).toString() + floor;
        arrayOfPersons.push(newPerson);
        console.log(arrayOfPersons);
        let arrayOfPersonsStr = JSON.stringify(arrayOfPersons);
        localStorage.setItem("arrayOfPersons", arrayOfPersonsStr);
        console.log(localStorage);
    }

    render(arrayOfPersons);
})

