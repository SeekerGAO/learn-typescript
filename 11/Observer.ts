// 观察者模式
// 观察者模式定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，并自动更新。

// 观察者
class Observe {
    // 订阅目标事件
    update(...args: any): void {
        console.log(...args);
    }
}

// 目标
class Subject {
    observers: Array<any>;

    constructor() {
        this.observers = [];
    }

    // 添加观察者
    add(observer: Observe): void {
        this.observers.push(observer);
    }

    // 事件通知
    notify(...args: Array<any>): void {
        this.observers.forEach(observer => {
            observer.update(...args);
        })
    }
}

// 创建观察者
let obj1: Observe = new Observe();
let obj2: Observe = new Observe();
// 创建目标                                                                                     
let subject: Subject = new Subject();
// 将观察者添加到目标进行管理
subject.add(obj1);
subject.add(obj2);
// 目标主动通知观察者
subject.notify('I fired `SMS` event.');