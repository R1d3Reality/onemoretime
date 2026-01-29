// ================================
// День 3: Методи масивів
// ================================
//
// Мета дня:
// - писати декларативний код
// - готувати дані для UI
// - мислити як у React
//

// --------------------
// map — трансформація
// --------------------

const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

// --------------------
// map з обʼєктами
// --------------------

const users = [
    { name: 'Pavlo', age: 28 },
    { name: 'Petro', age: 17 }
];

const userNames = users.map(user => user.name);
console.log(userNames);

// --------------------
// filter — відбір
// --------------------

const filteredNumbers = [1, 4, 7, 2, 9].filter(number => number > 5);
console.log(filteredNumbers);

// --------------------
// filter з обʼєктами
// --------------------

const adultUsers = users.filter(user => user.age >= 18);
console.log(adultUsers);

// --------------------
// some — хоча б один
// --------------------

const orders = [
    { items: 3 },
    { items: 0 },
    { items: 5 }
];

const hasEmptyOrders = orders.some(order => order.items === 0);
console.log(hasEmptyOrders);
