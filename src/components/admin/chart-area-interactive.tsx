'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from '@/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
  { day: '1', revenue: 4500 },
  { day: '2', revenue: 6500 },
  { day: '3', revenue: 5000 },
  { day: '4', revenue: 7500 },
  { day: '5', revenue: 6000 },
  { day: '6', revenue: 8500 },
  { day: '7', revenue: 7000 },
  { day: '8', revenue: 9000 },
  { day: '9', revenue: 5500 },
  { day: '10', revenue: 6500 },
  { day: '11', revenue: 8000 },
  { day: '12', revenue: 9500 }
];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--primary))'
  }
} satisfies ChartConfig;

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

      <ChartContainer config={chartConfig} className='h-64 w-full'>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='day'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip
            content={<ChartTooltipContent />}
            cursor={false}
            formatter={(value) => `$${(Number(value) / 1000).toFixed(1)}k`}
          />
          <Bar
            dataKey='revenue'
            fill='var(--color-primary)'
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
