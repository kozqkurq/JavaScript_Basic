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

const ex17_1 = parseJSONAsync('{"foo": "pom"}').then(()=>console.log("ok")).finally(()=>console.log("finish"))
const ex17_2 = parseJSONAsync('不正なJSON').catch(()=>console.log("error")).finally(()=>console.log("finish"))

ex17_1
ex17_2
