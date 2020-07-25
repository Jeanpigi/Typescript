export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//superClase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
    }
    // get y set nos permiten acceder a los atributos privados
    get id(){
        return this._id;
    }


    get title(){
        return this._title;
    }

    set title(title: string){
        this._title = title;
    }
}



//modificadores access of get y set

class Picture extends Item {
    public static photoOrientation = PhotoOrientation;
    //propiedades
    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation){
        super(id, title);
        this._orientation = orientation;
    }

    get orientation(){
        return this._orientation;
    }

    set orientation(orientation: PhotoOrientation){
        this._orientation = orientation;
    }

    //comportamiento
    public toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}


class Album extends Item {
    // el # permite agregarlo de manera privada la clase
    #pictures: Picture[];

    public constructor(id: number, title: string){
        super(id, title);
        this.#pictures = [];
    }

    public addPicture(picture: Picture){
        this.#pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Picture');
const picture: Picture = new Picture(1, 'JP session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);

//accediendo a los miembros privados
//picture.id = 100;
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album', album);

//Probar el miembro static of picture
console.log('PhotoOrientation', Picture.photoOrientation.Portrait);

