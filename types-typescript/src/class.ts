enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //propiedades
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
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
//picture.title = 'Another title';
//album.title = 'Personal Activities';
//console.log('album', album);