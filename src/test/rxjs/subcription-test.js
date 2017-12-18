/* 
 * What is a Subscription?
 * 
 * A Subscription is an object that represents a disposable resource, usually the execution of an Observable. 
 * A Subscription has one important method,【unsubscribe】, that takes no argument and just disposes the resource held by the subscription. 
 * In previous versions of RxJS, Subscription was called "Disposable".
*/


/* 
* A Subscription essentially just has an 【unsubscribe()】 function to release resources or cancel Observable executions.
*/


var Rx = require('rxjs/Rx');

var observable = Rx.Observable.interval(1000);

var subscription = observable.subscribe(x => console.log(x));

var subscriptionChild = observable.subscribe((x) => {
    console.log('I am child:' + x);
});

subscription.add(subscriptionChild);

setTimeout(() => {
    subscription.unsubscribe();
}, 3100);



