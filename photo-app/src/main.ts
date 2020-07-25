import { User } from "./user.ts";
import { Album } from "./album.ts";
import { Picture } from "./picture.ts";
import { PhotoOrientation } from "./photo-orientation.ts";


const user = new User (1, 'Jp', 'Jean Pierre', true);
const album = new Album(10, 'Platen Courses');
const picture = new Picture(1, 'Typescript course', PhotoOrientation.Landscape);

user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);

user.removeAlbum(album);
console.log('user', user);