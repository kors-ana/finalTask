import store from './render';

const params = {
    sex: 'Мужской'
};

function filter(params) {
    let filteredArr = [[],[],[],[],[]];
    for (let i = 0; i < store.length; i++) {
        filteredArr[i] = store[i].filter((element) => {
            for (let key in element) {
                if (element[key] == params[key]) {
                    return element;
                }
            }

        })
    }
    return filteredArr;
}

console.log(filter(params));
