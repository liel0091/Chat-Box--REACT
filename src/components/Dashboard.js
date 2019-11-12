import React, { createContext, useReducer } from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';
import ChatList from './ChatList';
import ChatBox from './ChatBox'; 
import ChatBoxWithBoot from './ChatBoxWithBoot';
 
export const ChooseContext = createContext();

const initialState = {choose: false};
const reducer = (state, action) => {
    switch(action.type){
        case 'chosen':
            return {choose: true, action}
        case 'reset':
            return initialState
        default:
            throw state;
    }
}

function Dashboard() {
    const [choose, dispatch] = useReducer(reducer, initialState);  

    return (
        <ChooseContext.Provider value={{chooseState: choose.choose, chooseDispatch: dispatch}}>
            <Row>
                <Col className="pt-4" xs={12} sm={4}> 
                    <ChatList/>
                    <Button variant="primary" 
                        onClick={() => dispatch({type:'reset'})}
                        disabled={(choose.choose === true) ? false : true}
                    >
                       Leave chatroom 
                    </Button>
                </Col>
                <Col className="pt-4" xs={12} sm={8} style={dashbordCol}>  
                    {
                        (choose.choose === true) ? 
                            <ChatBoxWithBoot chooseFriend={choose.action}/>
                            /*<ChatBox chooseFriend={choose.action}/> */:    
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
