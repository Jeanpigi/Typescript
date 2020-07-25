import { Item } from './item.ts';
import { Picture } from  './picture.ts';

export class Album extends Item {
    private pictures: Picture[];

    constructor(id: number, title: string){
        super(id, title);
        this.pictures = [];
    }

    addPicture(picture: Picture){
        this.pictures.push(picture);
    }
}