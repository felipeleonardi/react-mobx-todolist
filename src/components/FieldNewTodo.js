import React, { Component } from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { inject } from 'mobx-react';

const FieldCustom = styled.div`
    margin: 15px 0;
`;

class FieldNewTodo extends Component {

    constructor(props) {
        super(props);
        this.onAddTodo = this.onAddTodo.bind(this);
    }

    onAddTodo(e) {
        if (e.which === 13) {
            this.props.store.createTodo(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return (
            <FieldCustom>
                <TextField
                    id="newTask"
                    placeholder="Nova Tarefa"
                    onKeyPress={ this.onAddTodo }
                    fullWidth
                />
            </FieldCustom>
        )
    }
}

export default inject('store')(FieldNewTodo);