import React, { Component } from 'react';
import API from '../services/API';

export default class ChatBot extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chatContainerShow: false,
            inputValue: ''
        }
    }

    showChatContainer() {
        return (
            <div className="chatbot-container">
                <div className="chatbot-result-area">

                </div>
                <div className="chatbot-input-area">
                    <textarea className="input-chatbot" name="chatinput" onChange={(e) => this.handleInputOnchange(e)}></textarea>
                    <button className="btn-primary send-btn" onClick={this.handleChatSend}>SEND</button>
                </div>

            </div>
        )
    }

    handleInputOnchange(e) {
        const value = e.target.value;
        this.setState({ inputValue: value });
    }

    handleChatSend = () => {
        const { inputValue } = this.state;
        if (inputValue.trim() !== '') {
            console.log('ssss')
            const payload = {
                "input": {
                    "text": inputValue
                },
                "alternate_intents": true
            }

            API.post('https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/e082c043-42fe-4831-ab3c-3b69af080ad3/v1/workspaces/2301ce51-c1a2-4061-af05-151bc8fdc5ac/message?version=2020-04-01',
             payload, {auth: {
                username: 'apikey',
                password: 'YXBpa2V5OmtiZGQ1YzFVWkZkXzl5bTJlSWtQTlRrQ1ZhWWgtRWVQN1dlYjBvYlc0MEpq'
            }}).then((data)=>{
                console.log(data)
            });
        }
    }

    render() {
        return (
            <div className="chat-div-main">
                <div className="chat-lower-bar" onClick={
                    (e) => {
                        e.preventDefault();
                        this.setState((prevState) => {
                            return { chatContainerShow: !prevState.chatContainerShow }
                        })
                    }}>
                    Click To Know About Covid19
                </div>
                {this.state.chatContainerShow && this.showChatContainer()}
            </div>
        )
    }
}