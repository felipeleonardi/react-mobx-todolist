import { observable, computed, action, decorate, autorun } from 'mobx';
import Todo from './Todo';

class TodoStore {
    todos = observable([
        {id: '01', value: 'Tomar banho', complete: false},
        {id: '02', value: 'Comer', complete: false},
        {id: '03', value: 'Caminhar', complete: false},
        {id: '04', value: 'Ler', complete: false},
        {id: '05', value: 'Brincar', complete: false}
    ]);
    filter = "";

    get filteredTodos() {
        const filter = this.filter;
        if (filter.length === 0) {
            return this.todos;
        } else {
            return this.todos.filter(todo => {
                return todo.value.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            })
        }
    }

    onChangeFilter(value) {
        this.filter = value;
    }

    createTodo(value) {
        this.todos.push(new Todo(value));
    }

    onCompleteTodo(id) {
        this.todos.forEach((todo, index) => {
            if (todo.id === id) {
                this.todos[index].complete = !this.todos[index].complete;
            }
        })
    }

    onRemoveTodo(id) {
        const filteredTodos = this.todos.filter(todo => todo.id !== id);                
        this.todos.replace(filteredTodos);
    }

    clearComplete(val) {
        const incompleteTodos = this.todos.filter(todo => !todo.complete);
        this.todos.replace(incompleteTodos);
    }
}
decorate(TodoStore, {
    todos: observable,
    filter: observable,
    filteredTodos: computed,
    createTodo: action,
    onChangeFilter: action,
    onCompleteTodo: action,
    clearComplete: action,
    onRemoveTodo: action
})

var store = window.store = new TodoStore();
export default store;

autorun(() => {
    // console.log('filter: ', store.filter);
    // console.log('todos: ', store.filteredTodos);
})