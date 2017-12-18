/* 
 * BehaviorSubjects are useful for representing "values over time". 
 * For instance, an event stream of birthdays is a Subject, but the stream of a person's age would be a BehaviorSubject.
*/

var Rx = require('rxjs/Rx');

var subject = new Rx.BehaviorSubject(100); //100 is the initial value

subject.subscribe({
    next: (x) => {
        console.log('subscribe A:' + x);
    }
});

subject.next('1');
subject.next('2');
subject.next('3');
subject.next('4');

subject.subscribe({
    next: (x) => {
        console.log('subscribe B:' + x);
    }
});

subject.next('5');

