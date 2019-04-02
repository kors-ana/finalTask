import arrayOfPersons from './store';
import {render} from './render';
// const params = {
//     sex: 'Женский',
//     floor: "2"
// };

// let params = {};
// let newArray = [];

const filterBtn = document.querySelector('.filter-btn');

filterBtn.addEventListener('click', function() {
    
    
    clean(arrayOfPersons);
    render(filter(collectFilterFields()));
});

export function collectFilterFields() {

    const filterTab = document.querySelector('.filter');

    //собираем все значения с полей
    const sex = filterTab.querySelector('.resident-info-sex__variant:checked');
    const floor = filterTab.querySelector('.resident-floor__field');
    const roomsField = filterTab.querySelector('.resident-rooms__field');
    const rooms = roomsField.options[roomsField.selectedIndex];
    const additionalArr = filterTab.querySelectorAll('.resident-info-additional__variant:checked');
    let additional = [];
    for (let i = 0; i < additionalArr.length; i++) {
        additional.push(additionalArr[i].value);
    }

    let arr = [sex, floor, roomsField];
    let params = {};

    arr.forEach((element) => {
        if (element.value !== undefined && element.value !== '') {
            params[element.name] = element.value;

            if (element.name === 'rooms') {
                params[element.name] = rooms.value;
            }
        }

        return params;
    });

    params["additional"] = additional.join(', ');
    // console.log(params);
    // console.log(params);
    return params;

};

// console.log(params);

export function filter(params) {
    console.log(params);
    console.log(arrayOfPersons);
    let newArray = arrayOfPersons.filter((element) => {
        console.log(element);
        // debugger;
        let flag = true;
        for (let key in params) {
            console.log(flag + ' ' + element[key] + ' ' + params[key]);
            flag = flag && element[key] === params[key];
        }
        return flag;
    });
    console.log(newArray);
    return newArray;    
};


function clean(array) {
    const floors = document.querySelectorAll('.house__floor');
    for (let i = 0; i < array.length; i++) {
        floors[array[i].floor - 1].querySelectorAll('.house__flat')[array[i].flat].innerHTML = '';
        floors[array[i].floor - 1].querySelectorAll('.house__flat')[array[i].flat].removeAttribute('id');
    }
}