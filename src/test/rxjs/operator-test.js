/* 
 * What are operators?
 * 
 * Operators are methods on the Observable type, such as .map(...), .filter(...), .merge(...), etc. 
 * When called, they do not change the existing Observable instance. 
 * Instead, they return a new Observable, whose subscription logic is based on the first Observable.
 * 
 * 
 * An Operator is a function which creates a new Observable based on the current Observable. 
 * This is a pure operation: the previous Observable stays unmodified.
 * 
*/

var Rx = require('rxjs/Rx');

function multiplyByTen(input) {
    var observable = Rx.Observable.create(function (observer) {
        input.subscribe({
            next: (x) => {
                observer.next(x * 10);
            },
            error: (err) => {
                observer.error(err);
            },
            complete: () => {
                console.log('complete');
                observer.complete();
            }
        });
    });

    return observable;
}

var input = Rx.Observable.from([1, 2, 3]);

var output = multiplyByTen(input);

output.subscribe({
    next: (x) => {
        console.log(x);
    }
});





