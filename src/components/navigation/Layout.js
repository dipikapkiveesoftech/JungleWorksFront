import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SubNav from './SubNav.jsx';
import {withRouter} from 'react-router-dom';

class Layout extends Component {
    render() {
      
        return (
            <>
                <SubNav/>
                {this.props.children}
            </>
        );
    }
}

export default withRouter(Layout);