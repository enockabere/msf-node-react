var budgetOptions = {
  series: [
    {
      name: 'Allocated Budget',
      data: [45, 52, 38, 60, 48, 52, 60, 58, 52, 65, 58, 62],
    },
    {
      name: 'Actual Spending',
      data: [35, 41, 35, 51, 42, 48, 55, 53, 50, 62, 69, 72],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    width: 600,
    toolbar: { show: false },
    dropShadow: {
      enabled: true,
      top: 12,
      left: 0,
      bottom: 0,
      right: 0,
      blur: 2,
      color: 'rgba(132, 145, 183, 0.3)',
      opacity: 0.35,
    },
  },
  colors: ['#22c55e', '#ec232b'], // Green for budget, red for spending
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    width: [3, 3],
    dashArray: [0, 0],
  },
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  yaxis: {
    labels: {
      formatter: function (value) {
        return 'KES ' + value / 1000 + 'K' // Format as KES thousands
      },
    },
    title: {
      text: 'Amount (KES)',
    },
  },
  xaxis: {
    type: 'month',
  },
  tooltip: {
    y: {
      formatter: function (value) {
        return 'KES ' + value.toLocaleString() // Format with commas
      },
    },
  },
  annotations: {
    yaxis: [
      {
        y: 60000, // Budget threshold
        borderColor: '#ff9800',
        label: {
          borderColor: '#ff9800',
          style: {
            color: '#fff',
            background: '#ff9800',
          },
          text: 'Budget Limit',
        },
      },
    ],
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.3,
      stops: [0, 90, 100],
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
}

var budgetChart = new ApexCharts(
  document.querySelector('#budget_utilization_chart'),
  budgetOptions
)
budgetChart.render()
