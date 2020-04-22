import React, { Component } from 'react'

export default class ContactDetails extends Component {
    render() {
        return (
            <div className="contact-details">
                <h5>Quick contact details:</h5>
                <div className="contact-info">
                    <div className="contact">
                        <div className="icon">
                            <img src="/assets/phone-icon.svg" width="80%"/>
                        </div>
                        <div className="contact-label">National Helpline Number:</div>
                        <div className="contact-number">+91-11-23978046</div>
                    </div>
                    <div className="contact">
                        <div className="icon">
                            <img src="/assets/mail-icon.svg" width="80%"/>
                        </div>
                        <div className="contact-label">National Helpline Email ID:</div>
                        <div className="contact-email">ncov2019@gov.in</div>
                    </div>
                </div>
            </div>
        )
    }
}
