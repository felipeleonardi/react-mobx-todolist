import { observable, decorate } from 'mobx';

class Todo {
    value;
    id;
    complete;

    constructor(value) {
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }
}

decorate(Todo, {
    value: observable,
    id: observable,
    complete: observable
})

export default Todo;