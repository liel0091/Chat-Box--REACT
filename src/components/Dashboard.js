import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ChatList from './ChatList';
import ChatBox from './ChatBox';

function Dashboard() {
    return (
        <Row>
            <Col xs={4}>
                <ChatList/>
            </Col>
            <Col xs={8} className="dashbord-col">
                <ChatBox/>
            </Col> 
        </Row>
    )
}

export default Dashboard; 
