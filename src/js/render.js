
let store = [[], [], [], [], []];

function render() {
    const floors = document.querySelectorAll('.house__floor');

    if (localStorage.length > 0) {
        store = localStorage.getItem('store');
        store = JSON.parse(store);
        console.log(store);
        if (store != undefined) {
            for (let i = 0; i < store.length; i++) {

                if (store[i].length > 0) {
                    for (let j = 0; j < store[i].length; j++) {
                        let renderedFlat = floors[i].querySelectorAll('.house__flat')[j];
                        renderedFlat.innerHTML =  store[i][j].icon
                    }
                } 
            }
        }
    }   
    
    return store;
}

render();

export default store;
