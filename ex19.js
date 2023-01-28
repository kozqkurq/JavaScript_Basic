function testFunc(){
	return new Promise(resolve=>setTimeout(resolve, 1000))
}
// 続けての実行
const start = perf_hooks.performance.now()
testFunc().then(testFunc).then(testFunc).then(testFunc).then(()=>
console.log('続けての実行', perf_hooks.performance.now() - start))
// 並行実行
Promise.all([testFunc(), testFunc(), testFunc(), testFunc()])
.then(()=>console.log('並行実行', perf_hooks.performance.now() - start))
