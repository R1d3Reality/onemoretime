// ================================
// День 1: Основи JavaScript
// ================================
//
// Мета дня:
// - зрозуміти змінні
// - типи даних
// - базову логіку if / else
// - вивід у консоль
//

// --------------------
// Завдання 1: Змінні та типи
// --------------------

let name = 'Pasha';
let age = 5;
let isLearningJS = true;

// Виводимо значення змінних
console.log(name, age, isLearningJS);

// --------------------
// Завдання 2: typeof
// --------------------

let user = {
    name: 'Oleg',
    age: 5
};

let numbers = [1, 2, 3, 4, 5];

// typeof для масиву повертає 'object' —
// це відома особливість JS
console.log(
    typeof name,
    typeof age,
    typeof isLearningJS,
    typeof numbers
);

// --------------------
// Завдання 3: Умови
// --------------------

let userAge = 18;

if (userAge > 18) {
    console.log('age > 18');
} else if (userAge < 18) {
    console.log('age < 18');
} else {
    console.log('age = 18');
}

// --------------------
// Завдання 4: Prompt + шаблонний рядок
// --------------------

let userName = prompt('What is your name?');

console.log(`Привіт, ${userName}. Ласкаво просимо в JavaScript`);
