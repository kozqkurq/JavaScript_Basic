function parseJSONAsync(json){
    return new Promise((resolve, reject)=>
        setTimeout(()=>{
            try {
                // 成功
                resolve(JSON.parse(json))
            }catch(err){
               // 失敗
                reject(err)
            }
        }, 1000)
       )
}
const success = parseJSONAsync('{"foo": 1}');
const failure = parseJSONAsync("不正なJSON");

console.log("-----Promise生成直後-----");
console.log(success);
console.log(failure);

setTimeout(() => {
    console.log("-----1秒後-----");
    console.log(success);
    console.log(failure);
}, 1000);
