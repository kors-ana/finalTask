import arrayOfPersons from './store';    

export function render(array) {
    const floors = document.querySelectorAll('.house__floor');
    if (localStorage.length > 0) {
        console.log(array);
        if (array != undefined) {
            for (let i = 0; i < array.length; i++) {
                floors[array[i].floor - 1].querySelectorAll('.house__flat')[array[i].flat].innerHTML = array[i].icon;
                floors[array[i].floor - 1].querySelectorAll('.house__flat')[array[i].flat].setAttribute('id', array[i].id);
            }
        }
    }   
    
    return array;
}

render(arrayOfPersons);


export default arrayOfPersons;
