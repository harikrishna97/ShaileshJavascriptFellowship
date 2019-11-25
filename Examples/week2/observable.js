// import { Observable } from 'rxjs';

const { Observable } = require("rxjs");


const observable = new Observable(observer => {
  setTimeout(() => {
    observer.next('Hello from a Observable!');
  }, 2000);
});

observable.subscribe(value => console.log(value));
