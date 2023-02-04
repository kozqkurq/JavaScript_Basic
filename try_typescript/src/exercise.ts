// 1
const str: string = "String";
console.log(str);

const num: number = 123;
console.log(num);

const bool:boolean = true;
console.log(bool);

const ary:string[] = ["abc", "def", "ghi"];
for (const data of ary) {
    console.log(data);
}

// 2
type Student = {
    name: string,
    age: number,
    email: string,
    inClassRoom: boolean
}

const student:Student = {
    name: "Tsubasa",
    age: 24,
    email: "xxx@xxx.com",
    inClassRoom: true
}
console.log(student);