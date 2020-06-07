import React, { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import getDataFor from '../utils/getDataFor'

export default class Dropdown extends Component {
    async componentWillMount() {
        this.setState({
            categories: []
        })
    }

    async componentDidMount() {
        let dropdown = document.querySelector('.dropdown-menu');
        dropdown.addEventListener('click', () => {
            document.querySelector('.dropdown-navigation').classList.toggle('show-dropdown');
        })

        let data = await getDataFor({ state: this.props.state })
        this.setState({
            categories: [... new Set(data.results.map(data => data.category))]
        })
    }

    render() {
        const iconMapping = {
            "Doctors": "icon-doctor.svg",
            "Government Contacts": "icon-govt-officers.svg",
            "Helplines": "icon-call.svg",
            "Hospitals": "icon-hospital.svg",
            "Laboratories": "icon-labs.svg",
            "Fever Clinics": "icon-fever.svg",
            "Quarantine Facilities": "icon-quarantine.svg",
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
