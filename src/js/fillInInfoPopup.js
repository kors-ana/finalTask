export default function fillInInfoPopup(obj) {
    const fields = document.querySelectorAll('.resident-reference__field');
    const values = [];

    for (let key in obj) {
        values.push(obj[key]);
    }

    for (let i = 0; i < fields.length; i++) {
        fields[i].innerHTML = values[i];
    }
}
