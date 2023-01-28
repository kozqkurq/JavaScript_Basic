const testError = Error("This is test.");

try{
    throw testError;
}catch(e){
    console.log(e.message);
}finally{
    console.log("finally");
}