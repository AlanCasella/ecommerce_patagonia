import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.js";
import "./Catalogo.css";
import {connect, useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getCategories,
  getProductByCategory,
} from "../../store/actions/index";
import { Link, useParams } from "react-router-dom";

/* Componente a medio terminar. El CSS de ProductCard es necesario para que se vea bien la Card a la hora
de renderizar. el CSS de categorías es un poco inestable y es necesario modificarlo cuando se pasen props,
pero por ahora no quiero renegar mucho más, ya que no tengo idea cuantas categorías van a haber.
El código y la lógica funcionan bien, salvo por la falta de props en la parte de categorías.*/

function Catalogo(props) {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state)
    const [ jump, setJump ] = useState(0)

 useEffect(() => {
    var tempQuery = props.location.search
    var temp = props.history.location.pathname;
    temp = temp.split("/");
    tempQuery && (tempQuery = tempQuery.split("="))

    if(tempQuery) {
      let salto = tempQuery[1] > 0 ? (tempQuery[1]-1) * 12 : 0;
      setJump(salto)
      dispatch(getProducts(12,salto));
    } else if (props.history.location.pathname === "/products") {
      dispatch(getProducts(12,0))
    } 
    if (props.history.location.pathname === `/products/categoria/${temp[3]}`) {
      props.getProductByCategory(temp[3]);
    }

    props.getCategories();
    return function cleanup() {};
  }, [jump]);

  function handleClick(catName) {
    props.getProductByCategory(catName);
  }

  function handleClickAll() {
    props.getProducts();
  }

  function handleNext() {
    setJump(jump + 12);
    //dispatch(getProducts(jump));
  }

  function handlePrev() {
    setJump(jump - 12);
    //dispatch(getProducts(jump));
  }
  return (
    <div id="Catalogo-Container">
      <div id="Catalogo-Lista-Container">
        <lu id="Catalogo-Lista">Categorias</lu>
        {categories &&
          categories.map((cat) => (
            <Link
              className = "catalogo-Link"
              to={`/products/categoria/${cat.name}`}
              onClick={() => handleClick(cat.name)}
            >
              <li className="Catalogo-Lista-Item">{cat.name}</li>
            </Link>
          ))}
        {/* <li className="Catalogo-Lista-Item" style={{ marginTop: 30 }}>
          Category
        </li>
        <li className="Catalogo-Lista-Item">Category</li>
        <li className="Catalogo-Lista-Item">Category</li> */}
        <Link to="/products">
          <button onClick={() => handleClickAll()} className="Catalogo-btn">
            Ver Todos
          </button>
        </Link>
      </div>

      <div id="Catalogo-ProductCard-Container">

        {props.products.length > 0 && props.products.map((prod) => (
          <div>

            <Link className="catalogo-Link" to={`/product/${prod.id}`}>

              <ProductCard
                /* id={prod.id} */
                name={prod.name}
                thumbnail={prod.thumbnail}
                stock={prod.stock}
                price={prod.price}
                volume={prod.volume}
              ></ProductCard>

            </Link>
          </div>
        ))}

      </div>
      <div>
        <Link to={`/products/?page=${(jump)/12}`}>
            <button onClick={() => handlePrev()}
            disabled={(jump/12) < 1}>Anterior</button>
        </Link>
        <Link to={`/products/?page=${((jump)/12)+2}`}>
            <button onClick={() => handleNext() }
            disabled={props.products.length < 12}>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.products,
    categories: state.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(getProducts()),
    getCategories: () => dispatch(getCategories()),
    getProductByCategory: (catName) => dispatch(getProductByCategory(catName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalogo);
