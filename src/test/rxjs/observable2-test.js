/* 
* Observables are able to deliver values either synchronously or asynchronously.
* Observables can "return" multiple values over time
*/

// synchronously 同步
var Rx = require('rxjs/Rx');

var observable = Rx.Observable.create(function (observer) {
    console.log('hello');
    observer.next('1');
    observer.next('2');
    observer.next('3');
});


console.log('before');
observable.subscribe(function (x) {
    console.log(x);
});
console.log('after');


// asynchronously　异步

var observable2 = Rx.Observable.create(function (observer) {
    console.log('foo2');
    observer.next('4');
    observer.next('5');
    observer.next('6');
    setTimeout(() => {
        observer.next('7');
    }, 1000);
});


console.log('before');
observable2.subscribe(function (x) {
    console.log(x);
});
console.log('after');


/* 
* Subscribing to an Observable is like calling a function, providing callbacks where the data will be delivered to.
*/

/* 
* When you subscribe, you get back a Subscription, which represents the ongoing execution. Just call unsubscribe() to cancel the execution.
*/