import React, { Component } from 'react';

class ChatboxInput extends Component {

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            console.log('enter press here! ')
        }
    };

    render() {
        return (
            <div className="Input">
                <input type="text" placeholder="Start type something" onKeyDown={this.handleKeyPress} tabIndex="0" />
            </div>
        );
    }
}

export default ChatboxInput;
