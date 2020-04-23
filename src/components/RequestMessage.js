import React, { Component } from 'react'

export default class RequestMessage extends Component {
    render() {
        return (
            <div className="request">
                <div className="user-profile-image">
                    <img src="/assets/user-icon.svg" />
                </div>
                <div className="user-request message">
                    What can you do for me?
                </div>
            </div>
        )
    }
}
