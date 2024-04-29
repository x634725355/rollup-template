import { resolve } from "path";
import './index.less'

export class Momo {
  name: string;
  age: number;

  constructor() {
    this.name = 'momo';
    this.age = 18;
    console.log('momo', resolve('./dist/momo.js'));
  }

  callMe() {
    console.log(`${this.name} ${this.age}`);
  }
}

