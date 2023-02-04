function parseJSONAsync(json){
    return new Promise((resolve, reject)=>
        setTimeout(()=>{
            try {
                // 成功
                resolve(JSON.parse(json));
            }catch(err){
               // 失敗
                reject(err);
            }
        }, 1000)
       )
}

async function tryAsync(json){
    try{
        const result = await parseJSONAsync(json);
        console.log("パース結果", JSON.stringify(result));
    }catch(e){
        console.log("エラーをキャッチ", e.message);
    }
}

tryAsync('{"foo": 1}');