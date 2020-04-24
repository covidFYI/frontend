import React, { Component } from 'react'

export default class CategoryData extends Component {
    render() {
        return (
            <div>
                {Array.from(this.props.data).map(dataUnit => {
                    dataUnit.name
                })}
            </div>
        )
    }
}
