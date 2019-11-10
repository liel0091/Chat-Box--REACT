import React, {Fragment, useState} from 'react';
import {ListGroup, Alert} from 'react-bootstrap';

function ChatList(props) {
    const [chosen, setChosen] = useState('false');   

    const userList = [
        {
            id: '1',
            name:'Lisa',
            online: true 
        },
        {
            id: 2,
            name:'Tom',
            online: false 
        },
        {
            id: 3,
            name:'Jon',
            online: true 
        },
        {
            id: 4,
            name:'Adam',
            online: true 
        },
        {
            id: 5,
            name:'Sara',
            online: false 
        },
        {
            id: 6,
            name:'Kim',
            online: true, 
        },
    ] 

    const handelClick = () => {    
        setChosen(!chosen); 
    }  

    return (
        <Fragment>
            <Alert show={true} 
                variant={chosen ?  "warning" : "info"}
                className='m-2 '
            >
                {chosen ? 'You have chosen a friend!' : 'Choose a friend to chat with!'} 
            </Alert>  

            <div className="bg-dark border rounded m-2 pt-2"> 
                <h5 className="text-light">Who do you wanne chat with?</h5> 
                <ListGroup> 
                    {  
                        userList.map( user => (
                            <ListGroup.Item 
                                key={user.id} 
                                id={user.id}  
                                action
                                onClick={handelClick}
                                disabled={user.online ? false : true}  
                                variant={user.online ? 'success' : 'light' }    
                            >   
                                {user.name}{user.online ? ' is online' : ' is offline' }
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>  
            </div>
        </Fragment>
       
    )
}

export default ChatList; 
