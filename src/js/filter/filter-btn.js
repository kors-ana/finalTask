import arrayOfPersons from '../store';
import {render} from '../render';
import clean from '../clean';
import collectFilterFields from './collectFilterFields';
import filter from './filter';

const filterBtn = document.querySelector('.filter-btn');

filterBtn.addEventListener('click', function() {
    clean(arrayOfPersons);
    render(filter(collectFilterFields()));
    filterBtn.classList.add('clicked');
});

