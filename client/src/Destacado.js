import React, { useState, useEffect } from "react";
import ProductCard from "./Components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "./store/actions/index"
import "./Destacado.css";



const Destacado = () => {
    const [numero, setNumero] = useState(0)
    const [num, setNum] = useState(4)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getProducts(1000, 0)) }, []);
    const { products } = useSelector(state => state)


    const prod = !!products && products.length > 0 && products.filter(e => e.destacado === true)

    const valor = {
        transform: `translateX(${numero}em)`,
    }
    function next() {
        if (prod.length - num > 0) {
            setNum(num + 1)
            setNumero(numero - 15.5)
            return
        }
        return
    }
    function back() {
        if (num !== 4) {
            setNum(num - 1)
            setNumero(numero + 15.5)
            return
        }
        return
    }

    return (
        <div className="divDestacado">
            <img className="ca" src="http://localhost:3001/images/productos_destacados.gif" />

            <div className="destacadoTitle"><p>Productos destacados</p></div>

            <div className="destacadoProducts">
                {!!prod && prod.length > 0 && prod.map((p) => {

                    return (<div className="minidiv" style={valor} ><ProductCard
                        id={p.id}
                        name={p.name}
                        thumbnail={p.thumbnail}
                        stock={p.stock}
                        price={p.price}
                        volume={p.volume}
                        categorias={p.categories}
                    ></ProductCard></div>)

                })}
            </div>
            <div className="leftu">
                <button className="buttBackDes" onClick={() => back()} disabled={num === 4}> {"<"} </button>
            </div>
            <div className="raigtu">
                <button className="buttNextDes" onClick={() => next()} disabled={prod.length - num === 0}> {">"} </button>
            </div>


        </div>
    )
}

export default Destacado;