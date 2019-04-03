import arrayOfPersons from './store';   
import collectFilterFields from './filter/collectFilterFields';
import filter from './filter/filter'; 

export function render(array) {
    const floors = document.querySelectorAll('.house__floor');
    if (localStorage.length > 0) {
        console.log(array);
        if (array != undefined) {
            for (let i = 0; i < array.length; i++) {
                // if (array[i].floor > 0) {
                    floors[array[i].floor - 1].querySelectorAll('.house__flat')[array[i].flat].innerHTML = array[i].icon;
                    floors[array[i].floor - 1].querySelectorAll('.house__flat')[array[i].flat].setAttribute('id', array[i].id);
                // }
            }
        }
    };
    
    return array;
};

render(filter(collectFilterFields()));


export default arrayOfPersons;
