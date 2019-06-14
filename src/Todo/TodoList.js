import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Grid, Row, Col } from 'react-flexbox-grid';

//components
import Header from '../components/Header';
import FieldNewTodo from '../components/FieldNewTodo';
import FieldSearchTodo from '../components/FieldSearchTodo';
import TaskList from '../components/TaskList';

const ContainerCustom = {
    width: '100%',
    padding: '0px'
}

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.onCompleteTodo = this.onCompleteTodo.bind(this);
        this.clearComplete = this.clearComplete.bind(this);
    }

    onAddTodo(e) {
        if (e.which === 13) {
            this.props.store.createTodo(e.target.value);
            e.target.value = '';
        }
    }

    onChangeFilter(e) {
        this.props.store.onChangeFilter(e.target.value);
    }

    onCompleteTodo(id) {
        this.props.store.onCompleteTodo(id);
    }

    clearComplete() {
        this.props.store.clearComplete();
    }

    render() {
        const { filter, filteredTodos, todos } = this.props.store;
        return (
            <Grid style={ContainerCustom}>
                <Row>
                    <Col xs={12}>
                        <Header title="Lista de tarefas da Tais"/>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col xs={12} md={6}>
                        <form style={{ paddingTop: '40px' }}>
                            <Row>
                                <Col xs={12}>
                                    <FieldNewTodo/>
                                </Col>
                                <Col xs={12}>
                                    <FieldSearchTodo/>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '40px' }}>
                                <Col xs={12}>
                                    <TaskList/>
                                </Col>
                            </Row>  
                        </form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default inject('store')(observer(TodoList));
