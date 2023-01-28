let odd = [1, 3, 5];
let even = [2, 4, 6];
let chars = ["a", "b", "c"];
odd.pop();
even.pop();
chars.pop();

new_ary = [...odd, ...even, ...chars];
