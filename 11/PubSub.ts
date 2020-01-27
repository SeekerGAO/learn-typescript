// 订阅-发布模式
class PubSub {
    subscribers: Array<any>;

    constructor() {
        this.subscribers = [];
    }

    // 注册
    subscribe(type: any, fn: Function): void {
        let callbacks: any = this.subscribers[type];

        if (!callbacks) {
            this.subscribers[type] = [fn];
        } else {
            callbacks.push(fn);
        }
    }

    // 发布
    publish(type: any, ...args: Array<any>): void {
        let callbacks: any = this.subscribers[type] || [];
        callbacks.forEach((callback: any) => callback(...args));
    }
}

// 创建事件调度中心，为订阅者和发布者提供调度服务
let pubSub = new PubSub();
// A订阅了SMS事件（A只关注SMS本身，而不关心谁发布这个事件）
pubSub.subscribe('SMS', console.log);
// B订阅了SMS事件
pubSub.subscribe('SMS', console.log);
// C发布了SMS事件（C只关注SMS本身，不关心谁订阅了这个事件）
pubSub.publish('SMS', 'I published `SMS` event');

