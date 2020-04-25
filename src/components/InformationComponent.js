import React, { Component } from 'react'
import ContactDetails from './ContactDetails'
import Statistics from './Statistics'

export default class InformationComponent extends Component {
    render() {
        return (
            <div className="information">
                <Statistics />
            </div>
        )
    }
}
