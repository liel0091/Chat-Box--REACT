import React, {Component} from 'react';
import {Row, Col, Alert} from 'react-bootstrap';
import ChatList from './ChatList';
import ChatBox from './ChatBox'; 

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chosen: false,
            showAlert: true
        }
    }

    render() {
        return (
            <Row>
                <Col className="pt-4" xs={12} sm={4}>
                    <ChatList/>
                </Col>
                <Col className="pt-4" xs={12} sm={8} style={dashbordCol}> 
                    <ChatBox /> 
                </Col> 
            </Row>
        )
    }
}

const dashbordCol = {
    borderLeft: 'white solid 5px' 
}

export default Dashboard; 
