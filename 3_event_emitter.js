const EventEmitter = require('events');// this is a constructor

const myEvent = new EventEmitter();//this is an instance of the constructor

//on = what to do when a given event happens
myEvent.on('eventName', () => console.log("Hey! eventname happened"));



// same event --> multiple listeners
myEvent.on('eventName', () => console.log("Hey! eventName happened, only once."));

//emit = create an event
myEvent.emit('eventName');

//order matters. on always above emit.

// event emitter with multiple arguments

myEvent.on('anotherEvent', (x, y) => console.log(`anotherEvent happened. ${x}, ${y}`));

myEvent.emit('anotherEvent', 'October', '2021')