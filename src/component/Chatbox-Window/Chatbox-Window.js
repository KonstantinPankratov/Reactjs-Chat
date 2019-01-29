import React, { Component } from 'react';

class ChatboxWindow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [
                {
                    "id": 1,
                    "body": "Hello, fellas!",
                    "type": "income"
                },
                {
                    "id": 2,
                    "body": "Hi!",
                    "type": "outcome"
                }
            ]
        }
    }

    render() {
        return (
            <div className="Window">
                {this.state.messages.map((message) =>
                <div className={"message " + message.type} key={message.id}>
                    <div className="body">{message.body}</div>
                </div>
                )}
            </div>
        );
    }
}

export default ChatboxWindow;
