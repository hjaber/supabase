// Just extracting the color configuration to a single file so that it's easier to observe
// Needs better naming to be honest, but just to get things going

// For ChartHandler
export const CHART_COLORS = {
  TICK: 'var(--colors-scale6)',
  AXIS: 'var(--colors-scale6)',
  GREEN_1: 'var(--colors-brand9)', // #3ECF8E
  GREEN_2: 'var(--colors-brand6)',
}

export const USAGE_COLORS = {
  200: 'var(--colors-brand9)',
  201: 'var(--colors-brand8)',
  400: 'var(--colors-amber9)',
  401: 'var(--colors-amber8)',
  404: 'var(--colors-amber7)',
  500: 'var(--colors-red9)',
}



export const CHART_INTERVALS = [
  {
    key: 'minutely',
    label: '60 minutes',
    startValue: 1,
    startUnit: 'hour',
    format: 'MMM D, h:mma',
  },
  { key: 'hourly', label: '24 hours', startValue: 24, startUnit: 'hour', format: 'MMM D, ha' },
  { key: 'daily', label: '7 days', startValue: 7, startUnit: 'day', format: 'MMM D' },
]