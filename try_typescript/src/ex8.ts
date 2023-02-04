type Data<T> = {data: T};
function makeArray<T>(param1: T, param2:T):T[]{
    return [param1, param2];
}

const dataStr: Data<string> = {data: "string"};
const dataNum: Data<number> = {data: 1234};
console.log(makeArray<string>("abc", "def"));
console.log(makeArray<number>(123, 456));