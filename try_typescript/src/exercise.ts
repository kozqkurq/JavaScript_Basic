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

// 3
function sum_fn(left:number, right:number):number{
    const sum:number = left + right;
    return sum;
}
const sum_arrow: (left:number, right:number) => number = (left, right) => {
    const sum:number = left + right;
    return sum;
}

// 4
function push_gen<T>(array: T[], item: T): T[]{
    array.push(item); 
    return array;
}
console.log(push_gen<string>(["abc", "def"], "def"));
console.log(push_gen<number>([123, 456], 789));

// 5
export {
    str,
    num,
    bool,
    ary,
    Student,
    sum_fn,
    sum_arrow,
    push_gen
}