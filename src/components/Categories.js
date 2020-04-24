import React, { Component } from 'react';
import Link from 'next/link'

export default class Categories extends Component {

    render() {
        const iconMapping = {
            Doctor: "icon-doctor.svg",
            Government: "icon-govt-officers.svg",
            Helpline: "icon-call.svg",
            Hospitals: "icon-hospital.svg",
            Laboratory: "icon-labs.svg",
            "Fever Clinics": "icon-fever.svg",
            "Quarantine Facility": "icon-quarantine.svg",
        };

        return (
            <div className="categories-grid">
                {Array.from(this.props.categories).map(category => {
                    return (
                        <Link key={category} href={`/${this.props.state}/${category}`}>
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
