import React, { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

export default class Dropdown extends Component {
    componentWillMount() {
        this.state = {
            categories: []
        }


        const url = `https://api.covidfyi.in/v1/state/${this.props.state}`;

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({
                categories: [... new Set(data.results.map(data => data.category))]
            }))
    }

    componentDidMount() {
        let dropdown = document.querySelector('.dropdown-menu');
        dropdown.addEventListener('click', () => {
            document.querySelector('.dropdown-navigation').classList.toggle('show-dropdown');
        })

        // dropdown.addEventListener('blur', () => {
        //     document.querySelector('.dropdown-navigation').classList.remove('show-dropdown');
        // })
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
            <>
                <div className="selected-category">
                    <img src={`/assets/${iconMapping[this.props.category]}`} />
                    {this.props.category}
                </div>
                <div tabIndex="0" className="dropdown-menu">
                    <div className="selected-item">
                        Choose another category
                        <img src="/assets/breadcrum-arrow.svg" />
                    </div>
                    <div className="dropdown-navigation">
                        {Array.from(this.state.categories).map(category => {
                            return (
                                <Link key={category} href="/[state]/[category]" as={`/${this.props.state}/${category}`}>
                                    <a className="link nav-item active">
                                        {category}
                                    </a>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}
