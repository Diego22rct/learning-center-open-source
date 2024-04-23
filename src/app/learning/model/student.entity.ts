export class Student {
  id: number;
  name: string;
  age: number;
  address: string;
  constructor(id: number = 0, name: string = '', age: number = 0, address: string = '') {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
