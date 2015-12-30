var cart = [
    { name: 'Milk', price: 23.44 },
    { name: 'Cheese', price: 3.50 },
    { name: 'Peanuts', price: 8.00 },
    { name: 'Wine', price: 7.50 }
];

let myArray = [1, 2, 3, 4, 5, 6]

let  totalPrice = cart.reduce(function (memo, curVal) {
    return memo + curVal.price;
}, 0);

console.log(totalPrice);