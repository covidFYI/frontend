import React, { Component } from 'react'
import getDataFor from '../utils/getDataFor'

export default class Statistics extends Component {
    state = {
        categoriesStats: []
    }
    async componentDidMount() {
        let data = await getDataFor({ stats: 'categories/total'})
        this.setState({
            categoriesStats: data.results
        })
        // fetch('https://api.covidfyi.in/v1/categories/total')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({ categoriesStats: data.results })
        //         console.log(data.results);
        //     })
    }
    render() {
        return (
            <div className="statistics">
                <h5>Our site provides:</h5>
                <div className="statistics-info">
                    {
                        this.state.categoriesStats.map(item => {
                            return (
                                <div className="stat info">
                                    <div className="stat--number">{item.total}</div>
                                    <div className="stat--label">Number of  {item.category}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
