import React, { Component } from 'react';
import ChatboxHeader from '../../component/Chatbox-Header/Chatbox-Header';
import ChatboxWindow from '../../component/Chatbox-Window/Chatbox-Window';

class Chatbox extends Component {
    render() {
        return (
            <div className="Chatbox">
                <ChatboxHeader />
                <ChatboxWindow />
            </div>
        );
    }
}

export default Chatbox;
