const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];

add_ary = ary.map(i => i + 5);
result_ary = add_ary.filter(i => i % 2 == 0);

console.log(result_ary);