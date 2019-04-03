export default function collectFilterFields() {

    const filterTab = document.querySelector('.filter');

    //собираем все значения с полей
    const sex = filterTab.querySelector('.resident-info-sex__variant:checked') ? filterTab.querySelector('.resident-info-sex__variant:checked') : '';
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

    return params;
};