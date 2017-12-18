/* 
 *In an Observable Execution, zero to infinite 【Next】 notifications may be delivered. 
 *If either an 【Error】 or 【Complete】 notification is delivered, then nothing else can be delivered afterwards.
 */

var Rx = require('rxjs/Rx');

var observable = Rx.Observable.create(function (observer) {
    console.log('Observable');
    observer.next('1');
    observer.next('2');
    observer.complete();
    observer.next('3');　// 不会执行
});

observable.subscribe(function (x) {
    console.log(x);
});


var observable2 = Rx.Observable.create(function (observer) {
    console.log('Observable2');

    try {
        observer.next('4');
        throw new Error('Test Error');
        observer.next('5'); // 不会执行
    } catch (err) {
        observer.error(err);　// 如果不使用　oberver.error 方法，则在　subscribe() 中捕获不到 error
    }
});

observable2.subscribe(function (x) {
    console.log(x);
});

