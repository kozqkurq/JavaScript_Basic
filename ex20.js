const any_success = Promise.any([
    Promise.resolve('success'),
    Promise.resolve(new Error('エラー')),
    Promise.resolve(true)
]);
any_success;

const all_fail = Promise.any([
    Promise.reject(new Error('エラー')),
    Promise.reject(new Error('エラー')),
    Promise.reject(new Error('エラー'))
])
all_fail;
    