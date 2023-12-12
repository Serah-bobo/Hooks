import React from 'react'
import { useState } from 'react'
const initialProducts =[
    {id:1, name:'Airmax', category:'category A', price:2500},
    {id:2, name:'Jordan 4', category:'category B', price:1800},
    {id:3, name:'Vans', category:'category C', price:1000},
]

const Commerce = () => {
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts]=useState(initialProducts);
    const [cart,setCart]=useState([]);

    //function taking first product
    //find ( ) returns first element of an array
    //spread method
    const addCart=(productId)=>{
        const productAdd=products.find((product)=>product.id===productId)
        setCart([...cart, productAdd])
    };
  return (
    <div  className='flex bg-black text-white mx-auto p-4 text-center'>
      <h1  > Catalog</h1>
      <div className='flex mx-auto text-center  justify-between p-6 border border-r '>
        {products.map((product)=>(
          <div key={product.id}>
            <h3 className='flex justify-between font-bold text-red-600 '>{product.name}</h3>
            <p className='mx-auto px-4  justify-between '>Category: {product.category}</p>
            <p className='mx-auto px-4  justify-between text-red-950 font-bold my-0 '>Price: ${product.price}</p>
            {/*button*/}
            <button  className='rounded-md bg-green border text-green p=4 mx-auto'  onClick={()=> addCart(product.id)}>
                Add to cart
            </button>
          </div>  
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        <ul>
        {cart.map((item,index)=>(
            <li key={index}>
                {item.name}-${item.price}
            </li>
    ))}
        </ul>
       
      </div>
    </div>
  )
}

export default Commerce
