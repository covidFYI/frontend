import React, { Component } from 'react';
import Link from 'next/link'

export default class Categories extends Component {
    state = {
        categories: [],
        count: 0
    }

    // componentDidMount() {
    //     this.componentDidUpdate()
    // }

    componentDidMount() {
        // if (this.state.count < 10) {
            const url = `https://api.covidfyi.in/v1/state/${this.props.state}`;

            fetch(url)
                .then(res => res.json())
                .then(data => this.setState({
                    categories: [... new Set(data.results.map(data => data.category))],
                    count: this.state.count + 1
                }))
        // }
    }

    render() {
        const iconMapping = {
            Doctor: "icon-doctor.svg",
            Government: "icon-govt-officers.svg",
            Helplines: "icon-call.svg",
            Hospitals: "icon-hospital.svg",
            Laboratories: "icon-labs.svg",
            "Fever Clinics": "icon-fever.svg",
            "Quarantine Facility": "icon-quarantine.svg",
        };

        return (
            <div className="categories-grid">
                {Array.from(this.state.categories).map(category => {
                    return (
                        <Link key={category} href="/[state]/[category]" as={`/${this.props.state}/${category}`}>
                            <a className={this.props.category !== category ? `category link` : `category link active`}>
                                <img className="category-icon" src={`/assets/${iconMapping[category]}`} />
                                <span className="category-name">{category}</span>
                            </a>
                        </Link>
                    )
                })}

            </div>
        )
    }
}
