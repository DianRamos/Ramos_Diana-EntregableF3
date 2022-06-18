import React, { useState } from 'react'
import Item from './Item'
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
import data from './data.json'
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.


const Listado = ({increment})=> {

  return (
    <div className='container'>
      {
        data.map(product =>(
          <Item 
          key={product.id} 
          increment={increment} 
          name={product.producto.name} 
          description={product.producto.description} 
          stock={product.stock}
           />
          ))
      }

    </div>
  )
}
export default Listado;