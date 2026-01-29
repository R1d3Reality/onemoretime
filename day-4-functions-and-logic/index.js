// ================================
// День 4: Масиви + Функції
// ================================
//
// Мета дня:
// - закріпити filter / map
// - писати прості функції
// - розв'язувати типові задачі з проєктів
//

// --------------------
// Завдання 1: Відбір доступних товарів
// --------------------

const products = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Phone', price: 800, inStock: false },
    { name: 'Tablet', price: 600, inStock: true },
    { name: 'Monitor', price: 300, inStock: true }
];

// Повертає масив назв товарів,
// які є в наявності й дорожчі за minPrice
function getAvailableProducts(products, minPrice) {
    return products
        .filter(product => product.price >= minPrice && product.inStock === true)
        .map(product => product.name);
}

console.log(getAvailableProducts(products, 500));
// ['Laptop', 'Tablet']


// --------------------
// Завдання 2: Підрахунок порожніх замовлень
// --------------------

const orders = [
    { id: 1, user: 'Pavlo', items: 1 },
    { id: 2, user: 'Petro', items: 0 },
    { id: 3, user: 'Anna', items: 5 },
    { id: 4, user: 'Oleg', items: 2 }
];

// Повертає кількість замовлень без товарів
function countEmptyOrders(orders) {
    return orders.filter(order => order.items === 0).length;
}

console.log(countEmptyOrders(orders));
// 1


// --------------------
// Завдання 3: Онлайн + повнолітні користувачі
// --------------------

const users = [
    { name: 'Pavlo', age: 28, isOnline: true },
    { name: 'Petro', age: 17, isOnline: false },
    { name: 'Anna', age: 30, isOnline: true },
    { name: 'Oleg', age: 15, isOnline: false }
];

// Повертає імена користувачів,
// які повнолітні та онлайн
function getAdultOnlineUsers(users) {
    return users
        .filter(user => user.age >= 18 && user.isOnline === true)
        .map(user => user.name);
}

console.log(getAdultOnlineUsers(users));
// ['Pavlo', 'Anna']


// --------------------
// Завдання 4: Перевірка підписки (every)
// --------------------

const users2 = [
    { name: 'Pavlo', age: 28, isSubscribed: true },
    { name: 'Petro', age: 17, isSubscribed: false },
    { name: 'Anna', age: 30, isSubscribed: true },
    { name: 'Oleg', age: 16, isSubscribed: false }
];

// Повертає true, якщо всі повнолітні користувачі підписані
function hasAllSubscribedAdults(users) {
    return users.every(
        user => user.age >= 18 && user.isSubscribed === true
    );
}

console.log(hasAllSubscribedAdults(users2));
// false
