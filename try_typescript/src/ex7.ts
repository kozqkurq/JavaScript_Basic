type Animal = {species: string};
type Human = {name?: string, age?: number};
type User = Animal | Human;

const tama: User = {species: "cat"};
const mike: User = {name: "Mike"}

const bob: User = {age: 33};