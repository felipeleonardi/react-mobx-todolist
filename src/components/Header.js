import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = {
    titleCenter: {
        margin: '0 auto'
    }
}

export default class Header extends Component {
    render() {
        return (
            <div>
                <AppBar 
                    position="static" 
                    color="default"
                >
                    <Toolbar>
                        <Typography 
                            variant="title" 
                            color="inherit"
                            style={styles.titleCenter}
                        >
                            { this.props.title }
                        </Typography>
                    </Toolbar>  
                </AppBar>
            </div>  
        )
    }
}
