import React, { Component, PureComponent } from 'react'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


export default class LaboratoryStats extends PureComponent {
    state = {
        stats: []
    }
    componentDidMount() {
        fetch('https://api.covidfyi.in/v1/categories/Laboratory/total')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    stats: data.results
                })
                console.log(this.state.stats)
            })

    }

    render() {

        return (
            <div style={{ width: '100%', height: 800 }}>
                <ResponsiveContainer>
                    <BarChart
                        layout="vertical"
                        width={500}
                        height={300}
                        data={this.state.stats}
                        margin={{
                            top: 20, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 'dataMax + 1000']} />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" stroke="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}