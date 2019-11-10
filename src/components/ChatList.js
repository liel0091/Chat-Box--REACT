import React, { Fragment, useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { ChooseContext } from './Dashboard';
 
export default function ChatList() { 
    const chooseContext = useContext(ChooseContext);

    const userList = [
        {
            id: 0,
            name:'Lisa',
            online: true 
        },
        {
            id: 1,
            name:'Tom',
            online: false 
        },
        {
            id: 2,
            name:'Jon',
            online: true 
        },
        {
            id: 3,
            name:'Adam',
            online: true 
        },
        {
            id: 4,
            name:'Sara',
            online: false 
        },
        {
            id: 5,
            name:'Kim',
            online: true, 
        }
    ];

    return (
        <Fragment> 
            <div className="bg-dark border rounded m-2 pt-2"> 
                <h5 className="text-light">Who do you wanne chat with? </h5> 
                <ListGroup> 
                    {  
                        userList.map( user => (
                            <ListGroup.Item 
                                key={user.id} 
                                id={console.log(user.id)}  
                                action
                                onClick={() => chooseContext.chooseDispatch('chosen')}
                                disabled={user.online ? false : true}  
                                variant={user.online ? 'success' : 'light' }    
                            >   
                                {user.name}
                                {user.online ? ' is online' : ' is offline' }
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>  
            </div> 
        </Fragment> 
    )
} 
