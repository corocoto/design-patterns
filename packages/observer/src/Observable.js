export default class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers = [
      ...this.observers,
      func
    ];
  }

  unsubscribe(func) {
    this.observers = this.observers.filter(observer => observer !== func);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}