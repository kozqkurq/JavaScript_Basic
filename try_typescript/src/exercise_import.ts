import { 
    str,
    num,
    bool,
    ary,
    Student,
    sum_fn,
    sum_arrow,
    push_gen,
} from "./exercise.js";

// 1
console.log(str);
console.log(num);
console.log(bool);
for (const data of ary) {
    console.log(data);
}

// 2
const student:Student = {
    name: "Tsubasa",
    age: 24,
    email: "xxx@xxx.com",
    inClassRoom: true
}
console.log(student);

// 3
console.log(sum_fn(3, 5));
console.log(sum_arrow(3,5));

// 4
console.log(push_gen<string>(["abc", "def"], "def"));
console.log(push_gen<number>([123, 456], 789));