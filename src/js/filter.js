import store from './render';

const params = {
    sex: 'Мужской'
};

function filter(params) {
    let filteredArr = [];
    for (let i = 0; i < store.length; i++) {
        filteredArr = store[i].filter((element) => {
            for (let key in element) {
                if (element[key] == params[key]) {
                    return element[key];
                }
            }

        })
    }
    return filteredArr;
}

console.log(filter(params));
