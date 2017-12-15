// Observables are like functions with zero arguments, but generalize those to allow multiple value
var foo = function () {
    console.log('hello');
    return '1';
}

var x = foo.call();
console.log(x);

var y = foo.call();
console.log(y);


console.log('before');
console.log(foo.call());
console.log('after');