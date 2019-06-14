import React, { Component } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import { inject } from 'mobx-react';

const CardStyled = styled.div`
    margin: 15px 0px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    width: 100%;
    min-height: 40px;
    border-radius: 3px;
    padding-top: 15px;
    padding-left: 15px;
    text-align: left;
`;

const TitleStyled = styled.p`
    font-size: 18px;
    color: gray;
    text-align: left;
    margin: 0px 0px 0px 5px;
    display: inline-block;
`;

const IconStyled = styled.div`
    margin-right: 10px;
    float: right;
    cursor: pointer;s
`;

const CheckboxStyled = {
    color: 'green', 
    width: '25px', 
    height: '25px'
};

class CardCustom extends Component {

    constructor(props) {
        super(props);
        this.onRemoveTodo = this.onRemoveTodo.bind(this);
    }

    onRemoveTodo(id) {
        this.props.store.onRemoveTodo(id);
    }

    render() {
        const { todo } = this.props;
        return (
            <CardStyled>
                <Checkbox style={ CheckboxStyled } />
                <TitleStyled>{ todo.value }</TitleStyled>
                <IconStyled>
                    <DeleteIcon 
                        style={{fontSize: '30px'}}
                        onClick={() => this.onRemoveTodo(todo.id)}
                    ></DeleteIcon>
                </IconStyled>
            </CardStyled>
        )
    }
}

export default inject('store')(CardCustom)