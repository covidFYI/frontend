import React, { Component } from 'react'
import Statistics from './Statistics';
import OverallStats from './OverallStats'
import StatewiseCovidStats from './StatewiseCovidStats';
import LaboratoryStats from './LaboratoryStats';
import HospitalsStats from './HospitalsStats';
import CovidHistoryChart from './CovidHistoryChart';

export default class StatsContainer extends Component {
    render() {
        return (
            <div className="stats-flex">
                <OverallStats />
                {/* <StatewiseCovidStats/> */}
                <h5>Covid Cases (Past 2 Weeks)</h5>
                <CovidHistoryChart width={370} />
                <HospitalsStats />
                <LaboratoryStats />
            </div>
        )
    }
}
