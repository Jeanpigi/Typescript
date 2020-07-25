export abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
    }
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