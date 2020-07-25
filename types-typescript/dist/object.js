"use strict";
var user;
user = {};
user = {
    id: 1,
    username: 'jp',
    firstname: 'Jean Pierre',
    isPro: true
};
console.log('User', user);
//object vs el tipo object
var myObject = {
    id: 1,
    username: 'jp',
    firstname: 'Jean Pierre',
    isPro: true
};
//para saber si es una instancia
var isInstance = myObject instanceof Object;
console.log('Es una instacia:', isInstance);
console.log('user name:', myObject.username);
//console.log('user.username', user.username);
