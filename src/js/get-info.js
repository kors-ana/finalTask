import store from './add-resident';
import openInfoPopup from './open-info-popup';
import fillInInfoPopup from './fillInInfoPopup';

const flats = document.querySelector('.house__floors');
const maxFlatsNumber = 3; 


flats.addEventListener('click', function(e) {
    let personInfo;
    let target = e.target;
    
    while (target != flats) {

        if (target.classList.contains('house__flat')) {

            //получаем id квартиры  
            let id = target.getAttribute('id');
            console.log(id);

            //целочисленно делим id на максимальное количество квартир и получаем индекс массива в store
            let floor = Math.floor(id / maxFlatsNumber);
            console.log(floor);

            //по остатку от деления получаем нужный объект
            let flat = id % maxFlatsNumber;
            console.log(flat);

            //проверяем, если id <= максимальному числу квартир на этаже, значит, это первый этаж. тогда берем нулевой массив из store и объект из него, равный id - 1
            if (id <= maxFlatsNumber) {
                personInfo = store[0][id - 1];
                console.log(personInfo);

            } else {
                //в обратном случае 
                //если остаток от деления равен нулю, значит, это последняя квартира этажа. и чтобы получить верное значение этажа, нужно отнять единицу
                if (flat == 0) {
                    personInfo = store[floor - 1][maxFlatsNumber - 1];
                    console.log(personInfo);

                } else {
                    console.log(store);
                    personInfo = store[floor][flat - 1];
                    console.log(personInfo);
                }
            }

            // проверяем, существует ли объект в хранилище
            if (personInfo !== undefined) {
                fillInInfoPopup(personInfo);
                openInfoPopup();
                break;
            }
        }

        target = target.parentNode;
    }

})

// export default floor;


