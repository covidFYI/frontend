import React, { Component } from 'react';
import ResponseMessage from '../components/ResponseMessage'
import RequestMessage from '../components/RequestMessage'

export default class ChatBot extends Component {
    render() {
        return (
            <div id="chatbot">
                <h5 className="chatbot--header">
                    COVIDFYI - BOT
                    <span className="close-button">
                        <img src="/assets/Close.svg" />
                    </span>
                </h5>
                <div className="chatroom">
                    <ResponseMessage />
                    <RequestMessage />
                    <ResponseMessage />
                    <RequestMessage />
                    <ResponseMessage />
                    <RequestMessage />
                    <ResponseMessage />
                    <RequestMessage />
                </div>
                <div className="request-textfield">
                    <input type="text" className="text-field" />
                    <span>Press enter to send your message</span>
                </div>
            </div>
        )
    }
}
