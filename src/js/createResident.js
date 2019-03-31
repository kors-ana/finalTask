export default function createResident(name, icon, sex, floor, rooms, additional, quantity, id) {
    return {
        name: name,
        icon: icon,
        sex: sex,
        floor: floor,
        rooms: rooms,
        additional: additional,
        quantity: quantity,
        id: id
    }
}