import users from "./users.js";

/*01*/
/* Получить массив имен всех пользователей  (поле name).*/

const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.group("TASK - 01");
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
console.groupEnd();

/*02*/
/* Получить массив объектов пользователей по цвету глаз(поле eyeColor).*/

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.group("TASK - 02");
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
console.groupEnd();

/*03*/
/* Получить массив имен пользователей по полу (поле gender).*/

const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};

console.group("TASK - 03");
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
console.groupEnd();

/*04*/
/* Получить массив только неактивных пользователей(поле isActive).*/

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

console.group("TASK - 04");
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
console.groupEnd();

/*05*/
/* Получить пользоваля (не массив) по email(поле email, он уникальный). */

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.group("TASK - 05");
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
console.groupEnd();

/*06*/
/* Получить массив пользователей попадающих в возрастную категорию от min до max лет(поле age).*/

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age > min && user.age < max);
};

console.group("TASK - 06");
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
console.groupEnd();

/*07*/
/* Получить общую сумму баланса (поле balance) всех пользователей. */

const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => total + user.balance, 0);
};

console.group("TASK - 07");
console.log(calculateTotalBalance(users)); // 20916
console.groupEnd();

/*08*/
/* Массив имен всех пользователей у которых есть друг с указанным именем. */

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};

console.group("TASK - 08");
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
console.groupEnd();

/*09*/
/* Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends) */

const getNamesSortedByFriendsCount = (users) => {
  return [...users]
    .sort(
      (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length
    )
    .map((user) => user.name);
};

console.group("TASK - 09");
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
console.groupEnd();

/*10*/
/* Получить массив всех умений всех пользователей(поле skills),
 при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.*/

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((accSkills, user) => [...accSkills, ...user.skills], [])
    .filter((skill, index, skills) => skills.indexOf(skill) === index)
    .sort();
};

console.group("TASK - 10");
console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure',
'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ] */
console.groupEnd();
