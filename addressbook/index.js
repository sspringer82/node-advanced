import { Pet as Haustier } from './pet.js';
import User from './user.js';

console.log(User);

const klaus = new User('Klaus', 'Müller');

console.log(klaus.fullname);

const cat = new Haustier('cat');

console.log(cat.fullname);
