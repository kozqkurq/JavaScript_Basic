function* make_gen(){
	console.log('ジェネレータ開始')
	console.log('yield 1')
	yield 1
	console.log('yield 2')
	yield 2
	console.log('yield 3')
	yield 3
	console.log('ジェネレータ関数終了')
	return 'ジェネレータ関数の戻り値'
}

const gen = make_gen();
gen.next();
gen.next();
gen.next();
gen.next();

const gen2 = make_gen();
for (const v of gen2){
    console.log("繰り返し実行", v);
}


function* make_try_gen(){
	try{
        console.log('ジェネレータ開始')
        console.log('yield 1')
        yield 1
        console.log('yield 2')
        yield 2
        console.log('yield 3')
        yield 3
        console.log('ジェネレータ関数終了')
        return 'ジェネレータ関数の戻り値'
    }catch(err){
        console.log('エラーをキャッチ', err)
        yield 4
    }
}

const try_gen = make_try_gen();
try_gen.next();
try_gen.next();
try_gen.throw(new Error("error"));
try_gen.next();

const no_try_gen3 = make_gen();
no_try_gen3.next();
no_try_gen3.throw(new Error("error"));
no_try_gen3.next()