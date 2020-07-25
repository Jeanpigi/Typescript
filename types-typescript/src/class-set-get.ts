export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//modificadores de acceso get y set

class Picture {
    //propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation){
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    // get y set nos permiten acceder a los atributos privados
    get id(){
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }

    get title(){
        return this._title;
    }

    set title(title: string){
        this._title = title;
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


class Album {
    // el # permite agregarlo de manera privada la clase
    #id: number;
    #title: string;
    #pictures: Picture[];

    public constructor(id: number, title: string){
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    get id(){
        return this.#id;
    }

    set id(id: number){
        this.#id = id;
    }

    get title(){
        return this.#title;
    }

    set title(title: string){
        this.#title = title;
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
picture.id = 100;
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album', album);