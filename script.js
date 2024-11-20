  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [{ id: 'Sales', nested: { value: 50 } }, { id: 'Purchases', nested: { value: 50 } }, { id: 'anas', nested: { value: 50 } }]
      }]
    },
    options: {
      parsing: {
        key: 'nested.value'
      },
      responsive: false,
      maintainAspectRatio: false,
    //   weight: 1,
      backgroundColor: [
        'rgb(200, 99, 132)',
        'rgb(54, 100, 235)',
        'rgb(255, 205, 255)'
      ],
      // borderColor:'#abf'
    }
  })