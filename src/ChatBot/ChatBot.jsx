import React, { Component } from 'react';
import API from '../services/API';

export default class ChatBot extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chatContainerShow: false,
            inputValue: '',
            chatContent: '',
            resetValue: '',
            loading: false
        }
    }

    showChatContainer() {
        const { chatContent, resetValue, loading } = this.state;
        return (
            <div className="chatbot-container">
                <div className="chatbot-result-area" dangerouslySetInnerHTML={{ __html: chatContent }}>
                </div>
                <div className="chatbot-input-area">
                    {
                        loading && <span className="watson-loading">Watson thinking...</span>
                    }
                    {
                        !loading && <>
                            <input className="input-chatbot" name="chatinput" onChange={(e) => this.handleInputOnchange(e)} value={resetValue} onKeyDown={this.handleEnterForSubmit} />
                            <button className="btn-primary send-btn" onClick={this.handleChatSend}>SEND</button>
                        </>
                    }

                </div>

            </div>
        )
    }

    handleInputOnchange=(e)=>{
        const value = e.target.value;
        this.setState({ inputValue: value, resetValue: value });
    }

    handleEnterForSubmit=(e)=> {
        const { inputValue } = this.state;
       if(inputValue.trim() !== ''){
            if (e.key === 'Enter') {
            this.handleChatSend();
          }
       }
    }

    handleChatSend = () => {
        const { inputValue } = this.state;
        if (inputValue.trim() !== '') {

            this.setState((prevState) => {
                return {
                    chatContent: prevState.chatContent + `<p class="user-text">${inputValue}</p>`,
                    resetValue: '',
                    inputValue: ''
                }
            });



            const payload = {
                "input": {
                    "text": inputValue
                },
                "alternate_intents": true
            }

            this.setState({ loading: true });

            API.post('api/ChatBot/stateWiseData',
                payload).then((resp) => {
                    let result = '<ul class="reply-divs">';
                    if (resp && resp.data && resp.data.value.output && resp.data.value.output.text.length > 0) {
                        const respArr = resp.data.value.output.text;
                        respArr.map((row) => {
                            result = result + `<li>${row}</li>`
                        });
                    } else {
                        console.log('no answer')
                        result = result + `<li>Sorry, I'm not ready for this question</li>`
                    }
                    result = result + `</ul>`;
                    this.setState((prevState) => {
                        return {
                            chatContent: prevState.chatContent + `<div class="bot-text"><span class="watson-label-resp">Watson :</span>${result}</div>`
                        }
                    });

                }).catch((e) => {
                    console.log('error')
                    this.setState((prevState) => {
                        return {
                            chatContent: prevState.chatContent + `<div class="bot-text"><span class="watson-label-resp">Watson :</span><ul class="reply-divs"><li>Sorry can't fetch answer for you right now. Please try later...</li></ul></div>`
                        }
                    });
                }).finally(() => {
                    const ele = document.querySelector(".chatbot-result-area");
                    ele.scrollTop = ele.scrollHeight;
                    this.setState({ loading: false });
                });
        }
    }

    render() {
        return (
            <div className="chat-div-main">
                <div className="chat-lower-bar">
                    All About Covid 19 {!this.state.chatContainerShow && <span className="chatbot-icon" onClick={
                        (e) => {
                            e.preventDefault();
                            this.setState({ chatContainerShow: true });
                        }}>^</span>}{this.state.chatContainerShow && <span className="chatbot-icon" onClick={
                            (e) => {
                                e.preventDefault();
                                this.setState({ chatContainerShow: false, chatContent: '', inputValue: '' });
                            }}>x</span>}
                </div>
                {this.state.chatContainerShow && this.showChatContainer()}
            </div>
        )
    }
}