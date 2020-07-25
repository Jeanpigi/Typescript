//Void


//tipo explicito

function  showInfo(user:any): any {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'hola';
}

showInfo({id: 1, username: 'jpg', firstName: 'Jean Pierre'});

//tipo inferido

function showFormattedInfo(user: any) {
    console.log('User Info', `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
    `);
}

showFormattedInfo({id: 1, username: 'jpg', firstName: 'Jean Pierre'});

//tipo void como tipo de dato en variable

let unsuable: void;
//unsuable = null;
unsuable = undefined;

//tipo never

function handleError(code: number, message: string): never {
    // Proceso del código
    //generamos un mensaje
    throw  new Error(`${message}. code: ${code}`);

}

try {
    handleError(404, 'Not Found');
} catch (error) {
    
}

/*
function sumNumbers(limit: number): never {
    let sum = 0;
    while(true){
        sum++;
    }
    //return sum
}

sumNumbers(10);
//ciclo infinito, programa nunca termina
*/

