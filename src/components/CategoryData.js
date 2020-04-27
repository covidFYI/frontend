import React, { useState, useEffect } from 'react'

const CategoryData = (props) => {
    const [state, setState] = useState({
        data: [],
        count: 0
    })

    // componentDidUpdate() {
    //     this.updateComp()
    // }


    useEffect(() => {
        console.log("componentDidMount called")
        if(state.count < 10) {
            let url = `https://api.covidfyi.in/v1/state/${props.state}/${props.category}`;
    
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setState({
                        data: data.results,
                        count: state.count + 1
                    })
                    // cat = data.entries;
                })
        }
    }, [props.category])

        return (
            <div className="data-grid">
                {Array.from(state.data).map(dataUnit => {
                    return (
                        <div key={dataUnit.id} className="data-card">
                            <div className="info">
                                <div className='name'>
                                    {dataUnit.name != undefined ? dataUnit.name : dataUnit.category}
                                </div>
                                <div className="location">Location: {dataUnit.area}</div>
                                {dataUnit.phone1 ? <div className="phone">{dataUnit.phone1}</div> : null}
                                {dataUnit.email1 ? <div className="email">{dataUnit.email1}</div> : null }
                            </div>
                            <div className="cta">
                                <div className="button-group">
                                    {dataUnit.phone1 ? <a href={`tel:${dataUnit.phone1}`} className="contact-button">
                                        <img src="/assets/phone.svg" />Call
                                    </a> : null }

                                    {dataUnit.email1 ? <a href={`mailto:${dataUnit.email1}`} className="contact-button">
                                        <img src="/assets/email-icon.svg" />Email
                                    </a> : null}
                                    
                                </div>
                                {dataUnit.sourceurl ? <a className="source-link" target="_blank" href={dataUnit.sourceurl}>Source link</a> : null}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    
}

export default CategoryData
