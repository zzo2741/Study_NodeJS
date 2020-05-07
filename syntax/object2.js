// array, object
// 함수를 값으로도 사용가능
function f1() {
    console.log(1 + 1);
    console.log(1 + 2);
}

a = f1;
a();

var i = {
    func: a,
};

i.func();
