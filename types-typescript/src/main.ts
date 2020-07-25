//string
let name: string;

//Number
let phone: number;

//Inferido
let phoneNumber = 1921031;

//hexadecimal
let hex: number = 0xf00d;
//binarios
let binary: number = 0b1010;
//octal
let octal: number = 0o744;

name = 'Jean Pierre';
phone = 3814012;

//backtick o back quoate
let userInfo: string;

userInfo = `
    User Info:
    nombre: ${name}
    telefono: ${phone}
    hexadecimal: ${hex}
    binario: ${binary}
    octalis: ${octal}
`;

console.log(`Hello ${name} this is your number ${phone}`);
console.log('User Information', userInfo);


