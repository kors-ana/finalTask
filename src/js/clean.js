export default function clean(array) {
    const floors = document.querySelectorAll('.house__floor');
    for (let i = 0; i < array.length; i++) {
        floors[array[i].floor - 1].querySelectorAll('.house__flat')[array[i].flat].innerHTML = '';
        floors[array[i].floor - 1].querySelectorAll('.house__flat')[array[i].flat].removeAttribute('id');
    }
}