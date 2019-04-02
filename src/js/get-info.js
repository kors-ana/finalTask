import arrayOfPersons from './store';   
import openInfoPopup from './open-info-popup';
import fillInInfoPopup from './fillInInfoPopup';

const flats = document.querySelector('.house__floors');
const maxFlatsNumber = 3; 


flats.addEventListener('click', function(e) {
	showInfo(e.target);
})


function showInfo(target) {
	while (target != flats) {
		if (target.classList.contains('house__flat')) {

		    const id = target.getAttribute('id');

		    let clickedResident;

		   	for (let i = 0; i < arrayOfPersons.length; i++) {
				if (arrayOfPersons[i].id === id && arrayOfPersons[i].icon) {
					clickedResident = arrayOfPersons[i];

					fillInInfoPopup(clickedResident);
					openInfoPopup();
				}
		   	}
		}

		target = target.parentNode;
	}
}



