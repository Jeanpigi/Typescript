let user: object;

user = {};

user = {
    id: 1,
    username: 'jp',
    firstname: 'Jean Pierre',
    isPro: true
};

console.log('User', user);
//object vs el tipo object
const myObject = {
    id: 1,
    username: 'jp',
    firstname: 'Jean Pierre',
    isPro: true
};

//para saber si es una instancia
const isInstance = myObject instanceof Object;

console.log('Es una instacia:', isInstance);
console.log('user name:', myObject.username);

//console.log('user.username', user.username);
