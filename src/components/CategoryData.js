import React, { Component } from 'react'

export default class CategoryData extends Component {
    state = {
        data: [],
        count: 0
    }

    componentDidUpdate() {
        this.updateComp()
    }

    updateComp() {
        if(this.state.count < 10) {
            const url = `http://localhost/api/v1/state/${this.props.state}/${this.props.category}`;
    
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        data: data.entries,
                        count: this.state.count + 1
                    })
                    this.cat = data.entries;
                })
        }
    }

    render() {
        return (
            <div className="data-grid">
                {Array.from(this.state.data).map(dataUnit => {
                    return (
                        <div key={dataUnit.id} className="data-card">
                            <div className="info">
                                <div className='name'>
                                    {dataUnit.name != undefined ? dataUnit.name : dataUnit.category}
                                </div>
                                <div className="location">Location: {dataUnit.area}</div>
                                {dataUnit.phone_1 ? <div className="phone">{dataUnit.phone_1}</div> : null}
                                {dataUnit.email_1 ? <div className="email">{dataUnit.email_1}</div> : null }
                            </div>
                            <div className="cta">
                                <div className="button-group">
                                    {dataUnit.phone_1 ? <a href={`tel:${dataUnit.phone_1}`} className="contact-button">
                                        <img src="/assets/phone.svg" />Call
                                    </a> : null }

                                    {dataUnit.email_1 ? <a href={`mailto:${dataUnit.email_1}`} className="contact-button">
                                        <img src="/assets/email-icon.svg" />Email
                                    </a> : null}
                                    
                                </div>
                                {dataUnit.sourceURL ? <a className="source-link" href={dataUnit.sourceURL}>Source link</a> : null}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
