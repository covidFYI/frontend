import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default class CovidHistoryChart extends PureComponent {
  width = this.props.width ? this.props.width : 500;

  state = {
    data: null,
  };

  componentDidMount() {
    fetch("https://api.covidfyi.in/v1/covid_stats/history")
      .then((res) => res.json())
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          var obj = data[i];
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop) && !isNaN(obj[prop])) {
              obj[prop] = +obj[prop];
            }
          }
        }
        this.setState({ data: data });
      });
  }

  render() {
    return (
      <div style={{ width: "100%", height: 400 }}>
        <AreaChart
          width={this.width}
          height={400}
          data={this.state.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Confirmed"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="Deaths"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="Recovered"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </div>
    );
  }
}
