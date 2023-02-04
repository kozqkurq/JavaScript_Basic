const test_name = "Tsubasa";
const test_age = 24;

function test_export_fn(left_term:number, right_term:number):number{
    return left_term + right_term;
};
type TestExportType = {
    name: string,
    age: number
};

export {
    test_name as another_name,
    test_age as another_age,
    test_export_fn,
    TestExportType
};