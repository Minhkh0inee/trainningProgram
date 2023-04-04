var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add('Khoi');
nameQueue.add('Thy');
var numberQueue = new Queue();
numberQueue.add(10);
//function generic
function someFunction(paramOne) {
    return paramOne;
}
//class methods
var someClass = /** @class */ (function () {
    function someClass() {
    }
    someClass.prototype.someMethod = function (item) {
        return item;
    };
    return someClass;
}());
