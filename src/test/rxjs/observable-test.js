// Observables are like functions with zero arguments, but generalize those to allow multiple value
// @link call-test.js

// import Rx from 'rxjs/Rx';
var Rx = require('rxjs/Rx');

var foo = Rx.Observable.create(function (observer) {
    console.log('hello');
    observer.next('1');
});

foo.subscribe(function (x) {
    // console.log(x);
});

foo.subscribe(function (x) {
    // console.log(x);
});


console.log('before');
foo.subscribe(function (x) {
  console.log(x);
});
console.log('after');