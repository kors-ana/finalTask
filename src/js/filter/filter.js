import arrayOfPersons from '../store';

export default function filter(params) {
    let newArray = arrayOfPersons.filter((element) => {
        let flag = true;
        for (let key in params) {
            flag = flag && element[key] === params[key];
        }
        return flag;
    });

    return newArray;    
};
