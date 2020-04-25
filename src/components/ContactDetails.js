import React, { Component } from 'react'

export default class ContactDetails extends Component {
    render() {
        return (
            <div className="contact-details">
                <div className="contact-info">
                    <div className="contact">
                        <div className="contact-label">National Helpline Number:</div>
                        <div className="contact-number">+91-11-23978046</div>
                        <div className="cta">
                            <a href="tel:+91-11-23978046" className="contact-button">
                                <img src="/assets/phone.svg" />Call
                            </a>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="contact-label">National Helpline Email ID:</div>
                        <div className="contact-email">ncov2019@gov.in</div>
                        <div className="cta">
                            <a href="mailto:ncov2019@gov.in" className="contact-button">
                                <img src="/assets/email-icon.svg" />Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
