import React, {useEffect, useState} from "react"
import {hot} from 'react-hot-loader/root';
import request from '../middleware/handlerRequest';

const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
    socket.send('Hello Server!');
}


export default hot((props) => {

    const [state, setState] = useState({
        textarea: ""
    })


    useEffect(()=> {

        socket.onmessage = (mess) => {
            console.log(mess)
            setState((prevState) => ({
                ...prevState,
                textarea: mess.data
            }))

        }
    }, [])



   const handleChange = ({target}) => {

        setState({
            ...state,
            [target.name]: target.value
        })

        socket.send(target.value);
    }

        return <>
            <div>Hello</div>
            <div>World</div>
            <input onChange={handleChange} name={"name"} type="text"/>
            <input onChange={handleChange} name={"value"} type="text"/>

            <textarea value={state.textarea} readOnly name="server" cols="30" rows="10"/>
            <button onClick={() => request("/server", "index", state)}>Button</button>
        </>
})