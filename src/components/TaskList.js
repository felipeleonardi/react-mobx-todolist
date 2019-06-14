import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import CardCustom from '../components/Card';

class TaskList extends Component {
    render() {
        const todoLis = this.props.store.filteredTodos.map(todo => (
            <CardCustom 
                todo={ todo }
                key={`todo-${todo.id}`}
            ></CardCustom>
        ))
        return (
            <div>
                { todoLis }
            </div>
        )
    }
}

export default inject('store')(observer(TaskList));
