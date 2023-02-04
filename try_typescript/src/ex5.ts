type ReadonlyInfo = {readonly name: string, age?: number};
const readonlyInfo: ReadonlyInfo = {name: "Tsubasa"};

readonlyInfo.age = 24;
// readonlyInfo.name = "Kanazawa";