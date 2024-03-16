import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from "../context/CartContext"
import ItemList from "./ItemList"

const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h1>Carrito Vacio</h1>
                        <button className="bg-[#de9d89] text-white px-3 py-1 rounded" >
                            <Link to={'/'}>
                                Volver al inicio
                            </Link>
                        </button>
                    </>
                    :
                    <div>
                        {<ItemList products={carrito} plantilla="ItemCart" />}
                        <div className='space-x-2'>
                            <p>Resumen de la compra: $ {totalPrice()}</p>
                            <button className="bg-[#de9d89] text-white px-3 py-1 rounded" onClick={emptyCart}>
                                Vaciar Carrito
                            </button>
                            <button className="bg-[#de9d89] text-white px-3 py-1 rounded" >
                                <Link to={'/'}>
                                    Continuar Comprando
                                </Link>
                            </button>
                            <button className="bg-[#de9d89] text-white px-3 py-1 rounded" >
                                <Link to={'/checkout'}>
                                    Finalizar compra
                                </Link>
                            </button>
                        </div>
                    </div>

            }

        </>
    )
}

export default Cart;
