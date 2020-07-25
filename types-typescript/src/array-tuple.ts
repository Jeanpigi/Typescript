// corchetes []

//tipo explicito
let users: string[];

users = ['jp', 'lp', 'np'];

//users = [1 , true, 'hola'];

//tipo inferido
let otherUsers = ['hola', 'world', 'hey'];

// array
let pictureTitle: Array<string>;
pictureTitle = ['Favorite sunset', 'Vacation time', 'Landscape'];

// acceder a los valores en un array
console.log('First user:', users[0]);
console.log('First Title:', pictureTitle[0]);

// propiedades en array
console.log('Users Length', users.length);

// uso de funciones en arrays
users.push('aPlatziusers');
users.sort();
console.log('users', users);