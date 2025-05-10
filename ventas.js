const ventas = [
    {
      cliente: 'Juan',
      productos: [
        { nombre: 'smartphone', cantidad: 1, precio: 350 },
        { nombre: 'laptop', cantidad: 1, precio: 800 },
      ],
    },
    {
      cliente: 'Ana',
      productos: [
        { nombre: 'smartphone', cantidad: 2, precio: 350 },
        { nombre: 'cámara', cantidad: 1, precio: 250 },
      ],
    },
    {
      cliente: 'Pedro',
      productos: [
        { nombre: 'laptop', cantidad: 1, precio: 800 },
        { nombre: 'cámara', cantidad: 2, precio: 250 },
      ],
    },
  ];
  

  function calcularSubtotal(venta) {
    return venta.productos.reduce((total, producto) => {
      return total + producto.cantidad * producto.precio;
    }, 0);
  }
  

  function calcularTotalVentas() {
    return ventas.reduce((total, venta) => {
      return total + calcularSubtotal(venta);
    }, 0);
  }
  

  function extraerTodosLosProductos() {
    const productos = new Set();
    ventas.forEach(venta => {
      venta.productos.forEach(producto => {
        productos.add(producto.nombre);
      });
    });
    return Array.from(productos);
  }
  

  function calcularCantidadPorCategoria() {
    const cantidades = {
      smartphone: 0,
      laptop: 0,
      cámara: 0,
    };
  
    ventas.forEach(venta => {
      venta.productos.forEach(producto => {
        const nombre = producto.nombre.toLowerCase();
        if (cantidades.hasOwnProperty(nombre)) {
          cantidades[nombre] += producto.cantidad;
        }
      });
    });
  
    return cantidades;
  }
  

  ventas.forEach((venta, index) => {
    console.log(`Venta ${index + 1} (Cliente: ${venta.cliente}) - Subtotal: $${calcularSubtotal(venta)}`);
  });
  
  console.log(`\nTotal de todas las ventas: $${calcularTotalVentas()}`);
  
  console.log(`\nProductos vendidos: ${extraerTodosLosProductos().join(', ')}`);
  
  const cantidadesPorCategoria = calcularCantidadPorCategoria();
  console.log(`\nCantidad por categoría:`);
  for (let categoria in cantidadesPorCategoria) {
    console.log(`${categoria}: ${cantidadesPorCategoria[categoria]}`);
  }
  