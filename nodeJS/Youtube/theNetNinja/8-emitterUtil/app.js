//events is a built in module
var events = require("events");
var util = require("util"); // inherit

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter); //now anything created by Person has EventEmitter

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name + ' said:' + mssg)
    });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');
