export class Message {
    add () {
        alert("sasd");
        let newMessage = {
            "id": 2,
            "body": "Hi!",
            "type": "outcome"
        };

        this.setState({
            messages: [...this.state.messages, newMessage]
        });
    }
}