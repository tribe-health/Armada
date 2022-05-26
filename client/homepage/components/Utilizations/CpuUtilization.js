import React, { useState, useEffect } from 'react';
import { Card, Typography } from '@mui/material';
import ComponentWrapper from '../../../utils/ComponentWrapper';
import GaugeChartTemplate from '../Charts/GaugeChartTemplate';

function CpuUtilization({ cpu }) {
  const percentage = Math.floor();
  return (
    <ComponentWrapper title='Total Cluster CPU Utilization'>
      <GaugeChartTemplate
        chartData={cpu}
        title='Total Cluster CPU Utilization'
        label='Total Cluster CPU Utilization'
      />
    </ComponentWrapper>
  );
}

export default CpuUtilization;
