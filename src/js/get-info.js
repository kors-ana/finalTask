import arrayOfPersons from './store';   
import openInfoPopup from './open-info-popup';
import fillInInfoPopup from './fillInInfoPopup';

const flats = document.querySelector('.house__floors');
const maxFlatsNumber = 3; 


flats.addEventListener('click', function(e) {
    console.log(arrayOfPersons);
    // let personInfo;
    let target = e.target;
    
    while (target != flats) {

        if (target.classList.contains('house__flat')) {

           const id = target.getAttribute('id');

           let clickedResident = {};

           for (let i = 0; i < arrayOfPersons.length; i++) {
               if (arrayOfPersons[i].id === id) {
                   clickedResident = arrayOfPersons[i];
               }
           }

           fillInInfoPopup(clickedResident);
            openInfoPopup();
            break;

            // проверяем, существует ли объект в хранилище
            // if (personInfo !== undefined) {
            //     fillInInfoPopup(personInfo);
            //     openInfoPopup();
            //     break;
            // }
        }

        target = target.parentNode;
    }

})

// export default floor;


