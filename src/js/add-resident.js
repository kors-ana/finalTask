import arrayOfPersons from './store'; 
import Resident from './createResident';
import {render} from './render';
import collectFilterFields from './filter/collectFilterFields';
import filter from './filter/filter';
  
import validateForm from './formValidation';

const addBtn = document.querySelector('.add-resident__btn_add');

addBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const filterBtn = document.querySelector('.filter-btn');
    const addResidentPopup = document.querySelector('.add-resident');

    //собираем все значения с полей
    const name = addResidentPopup.querySelector('.resident-name__field').value;
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
    const id = 0;

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
        console.log('Too many people');
    } else {
        newPerson.flat = maxFlats;
        newPerson.id = `${floor}-${newPerson.flat + 1}`;
        arrayOfPersons.push(newPerson);
        let arrayOfPersonsStr = JSON.stringify(arrayOfPersons);
        localStorage.setItem("arrayOfPersons", arrayOfPersonsStr);
    }

    // validateForm();
    if (filterBtn.classList.contains('clicked')) {
        render(filter(collectFilterFields()));
    } else {
        render(arrayOfPersons);
    }
    
})

