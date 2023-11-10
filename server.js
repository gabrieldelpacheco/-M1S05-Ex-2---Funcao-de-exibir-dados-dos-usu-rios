function list() {
    const userGrowing = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
    const fruitDescending = [ 'Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' , 'Laranja']
    const listNew = []

    
    for (let i = 0; i < userGrowing.length; i++) {
        listNew.push(userGrowing[i] + ' - ' + fruitDescending[fruitDescending.length - 1 - i])
    }

        console.log(listNew)

}
    list()