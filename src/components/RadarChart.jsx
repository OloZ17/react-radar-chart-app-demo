import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { object } from 'prop-types';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarChart = (props) => {
  const { data } = props;

  return (
    <div className="col-md-6">
      <Radar data={data} />
    </div>
  );
};

RadarChart.propTypes = {
  data: object,
};

export default RadarChart;
