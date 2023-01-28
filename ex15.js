fs.readdir(
    "./none",
    (err, files) => {
        console.log("fs.readdir()実行結果");
        console.log("err", err);
        console.log("files", files)
    }
)