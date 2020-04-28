import React, { Component, PureComponent } from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList
} from 'recharts';


export default class LaboratoryStats extends PureComponent {
    state = {
        stats: []
    }
    componentDidMount() {
        fetch('https://api.covidfyi.in/v1/categories/Laboratories/total')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    stats: data.results
                })
            })

    }

    render() {

        return (
            <div style={{ width: '100%', height: 1500 }}>
                <h5>Laboratory Statistics</h5>
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
                        <XAxis type="number" domain={[0, 'dataMax + 10']} />
                        <YAxis dataKey="state" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#FF8C76" isAnimationActive={false} >
                            {/* <LabelList dataKey="state" position="right" /> */}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}