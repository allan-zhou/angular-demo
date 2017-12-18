/*
 * What is an Observer?
 *  
 * An Observer is a consumer of values delivered by an Observable. 
 * Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: next, error, and complete. 
*/

var Rx = require('rxjs/Rx');


var observable = Rx.Observable.create(function (observer) {
    try {
        observer.next('4');
        throw new Error('Test Error');
        observer.next('5'); // 不会执行
    } catch (err) {
        observer.error(err);　// 如果不使用　oberver.error 方法，则在　subscribe() 中捕获不到 error
    }
});

/* 
 * Observers are just objects with three callbacks, one for each type of notification that an Observable may deliver.
*/
var observer = {
    next: (x) => {
        console.log('next');
        console.log(x);
    },
    error: (err) => {
        console.error('err' + err);
        // console.log(err.stack);
    },
    complete: () => {
        console.log('complete');
    }
};

observable.subscribe(observer);








