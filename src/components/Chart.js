import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = data => data.length > 0 ? _.round(_.sum(data) / data.length) : 0;

export default ({ data, color, units }) => {
  return (
    <div>
      <Sparklines width={180} height={120} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>

      <div>{average(data)} {units}</div>
    </div>
  );
}