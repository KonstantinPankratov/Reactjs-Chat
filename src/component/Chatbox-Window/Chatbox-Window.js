import React, { Component } from 'react';
import MessagesJSON from '../messages.json';

class ChatboxWindow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: MessagesJSON
        };

        this.addMessage = this.addMessage.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    addMessage(msg, type) {

        let next_id = this.state.messages[this.state.messages.length - 1].id + 1;

        let newMessage = {
            "id": next_id,
            "body": msg,
            "type": type
        };

        this.setState({
            messages: [...this.state.messages, newMessage]
        })
    }

    handleEnter (event) {
        if(event.key == 'Enter') {
            let msg = event.target.value.trim();
            let type = "outcome";

            this.addMessage(msg, type);

            event.target.value = '';
        }
    };

    render() {
        return (
            <div>
                <div className="Window">
                    {this.state.messages.map((message) =>
                        <div className={"message " + message.type} key={message.id}>
                            <div className="body new">{message.body}</div>
                        </div>
                    )}
                </div>
                <div className="Input">
                    <input type="text" placeholder="Start type something" onKeyDown={this.handleEnter} tabIndex="0" />
                </div>
            </div>
        );
    }
}

export default ChatboxWindow;
