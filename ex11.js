class TestClass {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print_name(){
        console.log(this.name);
    }
    add_age(x){
        this.age += x;
    }
}

let testObj = {
    name: "kanazawa",
    age: 24,
    print_name(){
        console.log(this.name);
    },
    add_age(x){
        this.age += x
    }
}

testClass = new TestClass("Tsubasa", 24);
testClass.print_name();
testClass.add_age(2);

testObj.print_name();
testObj.add_age(3);