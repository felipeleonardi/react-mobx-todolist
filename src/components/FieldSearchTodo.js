import React, { Component } from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { inject } from 'mobx-react';

const FieldCustom = styled.div`
    margin: 15px 0;
`;

class FieldSearchTodo extends Component {

    constructor(props) {
        super(props);
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    onChangeFilter(e) {
        this.props.store.onChangeFilter(e.target.value);
    }

    render() {
        return (
            <FieldCustom>
                <TextField
                    id="searchTask"
                    placeholder="Pesquisar por tarefa..."
                    onChange={ this.onChangeFilter }
                    fullWidth
                />
            </FieldCustom>
        )
    }
}

export default inject('store')(FieldSearchTodo);