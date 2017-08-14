const fruits = ['apples', 'bananas', 'mangos', 'peaches']
const vegetables = ['tomatoes', 'cucumbers', 'watermelon']
const sayHelloTo = (collection) => {
    for (let item of collection) {
        console.warn(item)
    }
}

let basket = {
    fruits,
    vegetables,
    sayHelloTo,
}

basket.sayHelloTo(basket.fruits)
