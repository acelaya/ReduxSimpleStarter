import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default ({ data, color }) => (
  <Sparklines width={180} height={120} data={data}>
    <SparklinesLine color={color} />
  </Sparklines>
);