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
            dataKey="Recovered"
            stackId="1"
            stroke="#51B768"
            fill="#51B768"
          />
          <Area
            type="monotone"
            dataKey="Confirmed"
            stackId="1"
            stroke="#7F7BC9"
            fill="#7F7BC9"
          />
          <Area
            type="monotone"
            dataKey="Deaths"
            stackId="1"
            stroke="#FF1041"
            fill="#FF1041"
          />
        </AreaChart>
      </div>
    );
  }
}
