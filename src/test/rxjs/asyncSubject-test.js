/* 
 * The AsyncSubject is a variant where only the last value of the Observable execution is sent to its observers, and only when the execution completes.
 * 
 * The AsyncSubject is similar to the last() operator, in that it waits for the complete notification in order to deliver a single value.
*/

var Rx = require('rxjs/Rx');

var subject = new Rx.AsyncSubject();

subject.subscribe({
    next: (x) => {
        console.log('subscribe A:' + x);
    }
});

subject.next('1');
subject.next('2');
subject.next('3');

subject.subscribe({
    next: (x) => {
        console.log('subscribe B:' + x);
    }
})

subject.next('4');
subject.next('5');

subject.complete();


