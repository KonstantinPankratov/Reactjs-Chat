import React, { Component } from 'react';
import ChatboxHeader from '../../component/Chatbox-Header/Chatbox-Header';
import ChatboxWindow from '../../component/Chatbox-Window/Chatbox-Window';
import ChatboxInput from '../../component/Chatbox-Input/Chatbox-Input';

class Chatbox extends Component {
    render() {
        return (
            <div className="Chatbox">
                <ChatboxHeader />
                <ChatboxWindow />
                <ChatboxInput />
            </div>
        );
    }
}

export default Chatbox;
