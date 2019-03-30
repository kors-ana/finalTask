import store from './add-resident'

const flats = document.querySelector('.house__floors');
const maxFlatsNumber = 3; 

flats.addEventListener('click', function(e) {
    let personInfo;
    let target = e.target;
    console.log(target);
    
    while (target != flats) {

        if (target.classList.contains('house__flat')) {

            //получаем id квартиры  
            let id = target.getAttribute('id');
            console.log(id);

            //проверяем, если id <= максимальному числу квартир на этаже, значит, это первый этаж. тогда берем нулевой массив из store и объект из него, равный id 
            if (id <= maxFlatsNumber) {
                console.log(store[0][id - 1]);
                personInfo = store[0][id - 1];
            } else {

                //в обратном случае целочисленно делим id на максимальное количество квартир и получаем индекс массива в store
                let floor = Math.floor(id / maxFlatsNumber);
                console.log(floor);
                //по остатку от деления получаем нужный объект
                let flat = id % maxFlatsNumber;
                console.log(flat);
                personInfo = store[floor][flat - 1];

                //если остаток от деления равен нулю, значит, это последняя квартира этажа. и чтобы получить верное значение этажа, нужно отнять единицу
                if (flat == 0) {
                    console.log(store[floor - 1]);
                    console.log(store[floor - 1][maxFlatsNumber - 1]);
                    personInfo = store[floor - 1][maxFlatsNumber - 1];
                }
                console.log(store[floor][flat - 1]);
                
            }

            // let ourPerson = store[id]
        }

        target = target.parentNode;
    }

    fillInInfoPopup(personInfo);
})


function fillInInfoPopup(obj) {
    const fields = document.querySelectorAll('.resident-reference__field');
    const values = [];

    for (let key in obj) {
        values.push(obj[key]);
    }

    for (let i = 0; i < fields.length; i++) {
        fields[i].innerHTML = values[i];
    }
}

