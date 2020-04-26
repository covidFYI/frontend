import React, { Component, PureComponent } from 'react'
import {
    PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer
} from 'recharts';

export default class OverallStats extends PureComponent {
    state = {
        stats: []
    }

    componentDidMount() {
        fetch('https://api.covidfyi.in/v1/covid_stats')
            .then(res => res.json())
            .then(data => {
                let stats = [];

                stats.push(data.map(d => {
                    return (
                        {
                            name: Object.keys(d)[0],
                            value: parseInt(Object.values(d)[0])
                        }
                    )
                }))

                this.setState({stats: stats.flat()})
                data = stats

            })
    }

    render() {
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        };

        const COLORS = ['#ff9d00', '#16928e', '#ff4c4c']
        return (
            <div style={{ width: '100%', height: 300 }}>
                <h5>Overall Statistics</h5>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="value" data={this.state.stats} label datakey="total">
                            <Cell fill={COLORS[0]} label/>
                            <Cell fill={COLORS[1]} />
                            <Cell fill={COLORS[2]} />
                        </Pie>
                        <Legend />
                        <Tooltip/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

