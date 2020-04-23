import React, { Component } from 'react'

export default class ResponseMessage extends Component {
    render() {
        return (
            <div className="response">
                <div className="chatbot-profile-image profile-image">
                    <img src="/assets/logo-sm.svg" />
                </div>
                <div className="chatbot-response message">
                    Hi, Good morning, I’m a COVIDFYI bot. How may I help you today?
                </div>
            </div>
        )
    }
}
