const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  const totales = orders.map( order => order.total)
  console.log(totales)

  //añadir 
  const totales2 = orders.map( order => {
    order.tax = .19
    return order
  })
  console.log(totales2)
  console.log(orders)

// Ejemplo donde no transformas los objetos originales
const tarifas3 = orders.map(order => {
    return {
        ...order,
        item: 0.19,
    }
})

console.log('origianl:', orders, 'con spreeadOperator:', tarifas3)