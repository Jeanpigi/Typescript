"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id_1, _title_1, _pictures;
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//modificadores de acceso get y set
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    Object.defineProperty(Picture.prototype, "id", {
        // get y set nos permiten acceder a los atributos privados
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (orientation) {
            this._orientation = orientation;
        },
        enumerable: false,
        configurable: true
    });
    //comportamiento
    Picture.prototype.toString = function () {
        return "[id: " + this.id + ", title: " + this.title + ", orientation: " + this.orientation + "]";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        // el # permite agregarlo de manera privada la clase
        _id_1.set(this, void 0);
        _title_1.set(this, void 0);
        _pictures.set(this, void 0);
        __classPrivateFieldSet(this, _id_1, id);
        __classPrivateFieldSet(this, _title_1, title);
        __classPrivateFieldSet(this, _pictures, []);
    }
    Object.defineProperty(Album.prototype, "id", {
        get: function () {
            return __classPrivateFieldGet(this, _id_1);
        },
        set: function (id) {
            __classPrivateFieldSet(this, _id_1, id);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "title", {
        get: function () {
            return __classPrivateFieldGet(this, _title_1);
        },
        set: function (title) {
            __classPrivateFieldSet(this, _title_1, title);
        },
        enumerable: false,
        configurable: true
    });
    Album.prototype.addPicture = function (picture) {
        __classPrivateFieldGet(this, _pictures).push(picture);
    };
    return Album;
}());
_id_1 = new WeakMap(), _title_1 = new WeakMap(), _pictures = new WeakMap();
var album = new Album(1, 'Personal Picture');
var picture = new Picture(1, 'JP session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
//accediendo a los miembros privados
picture.id = 100;
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album', album);
