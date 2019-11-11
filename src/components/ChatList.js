import React, { Fragment, useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { ChooseContext } from './Dashboard';
 
export default function ChatList() { 
    const chooseContext = useContext(ChooseContext); 

    const userList = [
        {
            id: 1,
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
        }
    ];

    const handleCheck = (chosenUser) => {
        chooseContext.chooseDispatch({type:'chosen', value: chosenUser})
    }

    return (
        <Fragment> 
            <div className="bg-dark border rounded m-2 pt-2"> 
                <h5 className="text-light">Who do you wanne chat with? </h5> 
                <ListGroup> 
                {   
                    userList.map( (user, index) => ( 
                        <ListGroup.Item 
                            key={index} 
                            dataid={user.id}  
                            action
                            onClick={() => handleCheck(user)}
                            disabled={user.online ? false : true}  
                            variant="success" 
                        > 
                        
                            {user.name}
                            {user.online ? " is online." : " is offline."}
                        </ListGroup.Item>
                    ))
                } 
                </ListGroup>  
            </div> 
        </Fragment> 
    )
} 
