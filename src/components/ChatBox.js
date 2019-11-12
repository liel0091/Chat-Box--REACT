import React, { useState, useEffect } from 'react';
import { Container, Form, ListGroup, Button } from 'react-bootstrap';  
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios'; 

function ChatBox(props) {    
    const [posts, setPosts] = useState([]); 
    const [inputValue, setInputValue] = useState("...");   
    const choosenFriend =  props.chooseFriend.value;  
    const choosenId = choosenFriend.id; 
       
    useEffect(() => {  
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${choosenId}`)
            .then(res => {  
                setPosts(res.data)
            })
            .catch( err => {
                console.log("An Error has occured : " + err )
            }) 
    }, [choosenId])

    const onChangeHandler = event => {  
        setInputValue(event.target.value);   
    }  

    const handelSubmit = event => { 
        event.preventDefault();   
        setInputValue("...");  

        axios.post(`https://jsonplaceholder.typicode.com/posts`, {
                userId: 11,
                commentId: Math.floor(Math.random() * 100),
                title: inputValue,
                body: "user"
            })
            .then(res => {  
                setPosts([...posts, res.data]);  
            })
            .catch( err => {
                console.log("An Error has occured : " + err )
            })    
    }

    return (
        <Container>  
            <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
              <h5 className="mt-2">Chatting with {choosenFriend.name}: </h5>     
            </ScrollAnimation> 
            <ListGroup style={chatBox} className="bg-white border rounded p-2">  
                { 
                    posts.map((post, index) => (
                        <ListGroup.Item 
                            key={index} 
                            style={(post.userId === 11) ? chatMessRight : chatMessLeft } 
                            variant={(post.userId === 11) ? "primary" : "info" } 
                            className="m-2 p-2 rounded border shadow-sm text-left"
                        >
                            {post.title}
                        </ListGroup.Item>
                    ))    
                }  
                {
                inputValue.length ?
                    <ListGroup.Item   
                        variant="warning" 
                        style={chatMessRight} 
                        className="m-2 p-2 rounded border shadow-sm justify-items-right text-right"
                    >
                        {inputValue.length ? inputValue : null}
                    </ListGroup.Item> 
                    : null   
                }    
            </ListGroup>  
            
            <Form className="d-flex rounded mt-2"> 
                <input 
                    type="text" 
                    value={inputValue} 
                    placeholder="..."  
                    className="mr-2 form-control" 
                    onChange={onChangeHandler}>
                </input> 
                <Button 
                    type="submit"  
                    className="rounded" 
                    variant="secondary" 
                    onClick={handelSubmit}
                > 
                    SEND 
                </Button> 
            </Form> 
        </Container> 
    )
}

const chatBox = {
    height: "500px",
    overflow: "scroll"
} 

const chatMessLeft = {
    width: "fit-content",
    float: "left",
    alignSelf: "flex-start"
}

const chatMessRight = {
    width: "fit-content",
    float: "right",
    alignSelf: "flex-end"
}
 
export default ChatBox; 
