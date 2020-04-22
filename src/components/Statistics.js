import React, { Component } from 'react'

export default class Statistics extends Component {
    render() {
        return (
            <div className="statistics">
                <h5>Current COVID-19 Stats:</h5>
                <div className="statistics-info">
                    <div className="stat info">
                        <div className="stat--label">Confirmed</div>
                        <div className="stat--number">6,606</div>
                    </div>
                    <div className="stat warning">
                        <div className="stat--label">Active</div>
                        <div className="stat--number">5,606</div>
                    </div>
                    <div className="stat success">
                        <div className="stat--label">Recovered</div>
                        <div className="stat--number">606</div>
                    </div>
                    <div className="stat danger">
                        <div className="stat--label">Deaths</div>
                        <div className="stat--number">188</div>
                    </div>
                </div>
            </div>
        )
    }
}
