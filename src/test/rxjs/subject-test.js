/* 
 * What is a Subject? 
 * 
 * An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. 
 * While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.
 * 
 * 
 * A Subject is like an Observable, but can multicast to many Observers. 
 * Subjects are like EventEmitters: they maintain a registry of many listeners
 * 
*/

var Rx = require('rxjs/Rx');

var subject = new Rx.Subject();

subject.subscribe({
    next: (x) => {
        console.log('subject A:' + x);
    }
});

subject.subscribe({
    next: (x) => {
        console.log('subject B:' + x);
    }
})

// subject.next(1);
// subject.next(2);

var observable = Rx.Observable.from([1, 2, 3]);
observable.subscribe(subject);

subject.next('4'); // 不执行


/* 
 * Every Subject is an Observable. 
 * Given a Subject, you can subscribe to it, providing an Observer, which will start receiving values normally. 
 * From the perspective of the Observer, it cannot tell whether the Observable execution is coming from a plain unicast Observable or a Subject.
 * 
 * Every Subject is an Observer. 
 * It is an object with the methods next(v), error(e), and complete(). To feed a new value to the Subject, just call next(theValue), 
 * and it will be multicasted to the Observers registered to listen to the Subject.
 * 
*/

