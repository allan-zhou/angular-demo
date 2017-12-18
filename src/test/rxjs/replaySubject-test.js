/* 
 * A ReplaySubject is similar to a BehaviorSubject in that it can send old values to new subscribers, but it can also record a part of the Observable execution.
 * 
 * A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.
*/

var Rx = require('rxjs/Rx');

var subject = new Rx.ReplaySubject(2); // buffer 2 values for new subscribers

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



