let arrayOfPersons = new Array();
if (!localStorage.getItem('arrayOfPersons')) {
    localStorage.setItem('arrayOfPersons', '[]');
} 
arrayOfPersons = JSON.parse(localStorage.getItem('arrayOfPersons'));

export default arrayOfPersons;