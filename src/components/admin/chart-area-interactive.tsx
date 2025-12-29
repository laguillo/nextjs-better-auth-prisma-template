'use client';

import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export const description = 'An interactive bar chart';

const allBars = [
  { height: 45, value: 4500 },
  { height: 65, value: 6500 },
  { height: 50, value: 5000 },
  { height: 75, value: 7500 },
  { height: 60, value: 6000 },
  { height: 85, value: 8500 },
  { height: 70, value: 7000 },
  { height: 90, value: 9000 },
  { height: 55, value: 5500 },
  { height: 65, value: 6500 },
  { height: 80, value: 8000 },
  { height: 95, value: 9500 }
];

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState('30d');

  return (
    <div className='bg-card flex flex-col rounded-xl border p-6 shadow-sm'>
      <div className='mb-6 flex items-center justify-between'>
        <div>
          <h3 className='text-lg font-bold'>Revenue Overview</h3>
          <p className='text-muted-foreground text-sm'>
            Monthly revenue vs churn rate
          </p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className='w-45'>
            <SelectValue placeholder='Select range' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='30d'>Last 30 Days</SelectItem>
            <SelectItem value='6m'>Last 6 Months</SelectItem>
            <SelectItem value='1y'>Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bar Chart */}
      <div className='flex h-64 w-full flex-1 items-end justify-between gap-2 pt-4'>
        {allBars.map((bar, index) => (
          <div
            key={index}
            className='bg-muted group relative flex w-full flex-col justify-end rounded-t-sm'
          >
            <div
              className='bg-primary/80 hover:bg-primary w-full rounded-t-sm transition-all duration-500'
              style={{ height: `${bar.height}%` }}
            ></div>
            {bar.value && (
              <div className='pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 group-hover:opacity-100'>
                ${(bar.value / 1000).toFixed(1)}k
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='text-muted-foreground mt-2 flex justify-between px-1 text-xs'>
        <span>1</span>
        <span>5</span>
        <span>10</span>
        <span>15</span>
        <span>20</span>
        <span>25</span>
        <span>30</span>
      </div>
    </div>
  );
}
