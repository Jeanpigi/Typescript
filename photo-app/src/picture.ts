import { Item } from './item.ts';
import { PhotoOrientation  } from  './photo-orientation.ts';

export class Picture extends Item {
    public static photoOrientation = PhotoOrientation;
    private _orientation: PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation){
        super(id, title);
        this._orientation = orientation;
    }

    get orientation(){
        return this._orientation;
    }

    set orientation(orientation: PhotoOrientation){
        this._orientation = orientation;
    }

    public toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`;
    }
}