addTwoNumbers = (l1, l2) => {
    l1 = [2, 4, 3];
    l2 = [5, 6, 4];
    console.log(typeof l1)
    console.log(l1)
    let perro = l1.concat();
    console.log(typeof perro)
    console.log(perro + ' concat')
    let mapPerro = Object.values(l1);
    console.log(typeof mapPerro)
    console.log(mapPerro)

    let perro2 = l1.reverse();
    console.log(perro2)
    let gato = l2.reverse();
    console.log(gato)
}
addTwoNumbers();
