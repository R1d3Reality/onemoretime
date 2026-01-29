// ================================
// День 5: Дані як у реальному продукті
// reduce · бізнес-логіка · UI-мислення
// ================================

/*
Правило дня:
Ти не просто працюєш з масивами.
Ти готуєш дані для UI, аналітики та рішень.
*/


// --------------------
// Завдання 1: Dashboard — загальна статистика
// --------------------

const ordersStatsData = [
    { id: 1, user: 'Pavlo', total: 250, status: 'completed' },
    { id: 2, user: 'Petro', total: 400, status: 'completed' },
    { id: 3, user: 'Anna', total: 150, status: 'pending' },
    { id: 4, user: 'Oleg', total: 500, status: 'completed' },
    { id: 5, user: 'Anna', total: 300, status: 'pending' }
];

// Повертає статистику замовлень
// Умова: використовувати ОДИН reduce
function getOrdersStats(orders) {
    const data = orders.reduce((acc, order) => {
        if (order.status === 'completed') {
            acc.totalRevenue += order.total;
            acc.completedCount += 1;
            acc.completedRevenue += order.total;
        }

        if (order.status === 'pending') {
            acc.pendingCount += 1;
        }

        return acc;
    }, {
        totalRevenue: 0,
        completedCount: 0,
        pendingCount: 0,
        completedRevenue: 0
    });

    const averageCompleted =
        data.completedCount === 0
            ? 0
            : Number((data.completedRevenue / data.completedCount).toFixed(2));

    return {
        totalRevenue: data.totalRevenue,
        completedCount: data.completedCount,
        pendingCount: data.pendingCount,
        averageCompleted
    };
}

console.log(getOrdersStats(ordersStatsData));


// --------------------
// Завдання 2: Групування користувачів по ролях
// --------------------

const usersByRoleData = [
    { name: 'Pavlo', role: 'admin', isOnline: true },
    { name: 'Petro', role: 'user', isOnline: false },
    { name: 'Anna', role: 'user', isOnline: true },
    { name: 'Oleg', role: 'manager', isOnline: false },
    { name: 'Ira', role: 'admin', isOnline: false }
];

// Повертає обʼєкт { role: [names] }
function groupUsersByRole(users) {
    return users.reduce((acc, user) => {
        const role = user.role;

        if (!acc[role]) {
            acc[role] = [];
        }

        acc[role].push(user.name);
        return acc;
    }, {});
}

console.log(groupUsersByRole(usersByRoleData));


// --------------------
// Завдання 3: Бізнес-правило checkout
// --------------------

const cartData = [
    { product: 'Laptop', price: 1200, quantity: 1 },
    { product: 'Mouse', price: 40, quantity: 2 },
    { product: 'Keyboard', price: 0, quantity: 1 } // баг
];

// Повертає true, якщо:
// - кошик не порожній
// - price > 0
// - quantity > 0
function canCheckout(cart) {
    if (cart.length === 0) return false;

    return cart.reduce((acc, curr) => {
        if (!acc) return false;
        if (curr.quantity <= 0) return false;
        return curr.price > 0;
    }, true);
}

console.log(canCheckout(cartData));


// --------------------
// Завдання 4: Історія замовлень користувачів
// --------------------

const ordersHistoryData = [
    { id: 1, user: 'Pavlo', total: 250 },
    { id: 2, user: 'Anna', total: 150 },
    { id: 3, user: 'Pavlo', total: 300 },
    { id: 4, user: 'Anna', total: 100 },
    { id: 5, user: 'Oleg', total: 500 }
];

// Формує історію замовлень по користувачах
function buildUserOrderHistory(orders) {
    return orders.reduce((acc, order) => {
        const name = order.user;

        if (!acc[name]) {
            acc[name] = {
                count: 0,
                totalSpent: 0
            };
        }

        acc[name].count += 1;
        acc[name].totalSpent += order.total;

        return acc;
    }, {});
}

console.log(buildUserOrderHistory(ordersHistoryData));


// --------------------
// Завдання 5: Найактивніший користувач
// --------------------

const sessionsData = [
    { user: 'Pavlo', duration: 120 },
    { user: 'Anna', duration: 60 },
    { user: 'Pavlo', duration: 30 },
    { user: 'Oleg', duration: 10 },
    { user: 'Anna', duration: 90 }
];

// Повертає користувача з найбільшим сумарним duration
function getTopActiveUser(sessions) {
    if (sessions.length === 0) return null;

    const result = sessions.reduce((acc, session) => {
        const user = session.user;

        acc.totals[user] ??= 0;
        acc.totals[user] += session.duration;

        if (acc.totals[user] > acc.topDuration) {
            acc.topDuration = acc.totals[user];
            acc.topUser = user;
        }

        return acc;
    }, {
        totals: {},
        topUser: null,
        topDuration: 0
    });

    return result.topUser;
}

console.log(getTopActiveUser(sessionsData));
