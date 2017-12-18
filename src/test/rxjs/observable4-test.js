/* 
* When you subscribe, you get back a 【Subscription】, which represents the ongoing execution. 
* Just call 【unsubscribe()】 to cancel the execution.
*/

var Rx = require('rxjs/Rx');

var observable = Rx.Observable.from([10, 20, 30]);

var subscription = observable.subscribe(function (x) {
    console.log(x);
});


subscription.unsubscribe();

// observable.subscribe(function (x) {
//     console.log(x);
// });


var str = 'zhoujl'
var ret = Array.of(str);
console.log(ret);
ret = Array.from(str);
console.log(ret);

ret = Array.of(1, 2, 3);
console.log(ret);
ret = Array.from([1, 2, 3], (x) => { return x * 2 });
console.log(ret);


