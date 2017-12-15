var foo = function () {
    console.log('hello');
    return '1';
    return '2';// dead code. will never happen
}

var x = foo.call();
console.log(x);

var y = foo.call();
console.log(y);


console.log('before');
console.log(foo.call());
console.log('after');