import React, {createContext, useReducer} from 'react';
import {Row, Col, Alert, Button} from 'react-bootstrap';
import ChatList from './ChatList';
import ChatBox from './ChatBox'; 
 
export const ChooseContext = createContext();

const initialState = false;
const reducer = (state, action) => {
    switch(action){
        case 'chosen':
            return state = !state
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Dashboard() {  
    const [choose, dispatch] = useReducer(reducer, initialState);

    return (
        <ChooseContext.Provider value={{chooseState: choose, chooseDispatch: dispatch}}>
            <Row>
                <Col className="pt-4" xs={12} sm={4}> 
                    <ChatList/>
                    <Button variant="primary" onClick={() => dispatch('reset')} >Reset</Button>
                </Col>
                <Col className="pt-4" xs={12} sm={8} style={dashbordCol}> 
                    {choose ? 
                        <ChatBox /> :    
                        <Alert 
                            show={true} 
                            variant="warning"
                            className="m-2"
                        >
                        Choose a friend to chat with!
                        </Alert>  
                    }   
                </Col> 
            </Row> 
        </ChooseContext.Provider> 
    )
}

const dashbordCol = {
    borderLeft: 'white solid 5px' 
}

export default Dashboard; 
