class Queue<T>{
    private data:T[] =[];

    add(item: T) {
        this.data.push(item)
    }

    remove(){
        this.data.shift();
    }

}

const nameQueue = new Queue<string>();
nameQueue.add('Khoi');
nameQueue.add('Thy');

const numberQueue = new Queue<number>();
numberQueue.add(10)

//function generic
function someFunction<T>(paramOne:T):T{
    return paramOne;
}

//class methods
class someClass{
    someMethod<T>(item:T[]):T[]{
        return item
    }
}