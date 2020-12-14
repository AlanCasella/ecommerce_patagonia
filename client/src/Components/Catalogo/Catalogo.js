import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard.js";
import "./Catalogo.css";
import { connect } from "react-redux";
import {
  getProducts,
  getCategories,
  getProductByCategory,
} from "../../store/actions/index";
import { Link } from "react-router-dom";

/* Componente a medio terminar. El CSS de ProductCard es necesario para que se vea bien la Card a la hora
de renderizar. el CSS de categorías es un poco inestable y es necesario modificarlo cuando se pasen props,
pero por ahora no quiero renegar mucho más, ya que no tengo idea cuantas categorías van a haber.
El código y la lógica funcionan bien, salvo por la falta de props en la parte de categorías.*/

function Catalogo(props) {
  
  useEffect(() => {
    var temp = props.history.location.pathname;
    temp = temp.split("/");

    if (props.history.location.pathname === "/products") {
      props.getProducts();
    } 
    
    if (props.history.location.pathname === `/products/categoria/${temp[3]}`) {
      props.getProductByCategory(temp[3]);
    }

    props.getCategories();
    return function cleanup() {};
  }, []);

  console.log(props)

  function handleClick(catName) {
    props.getProductByCategory(catName);
  }

  function handleClickAll() {
    props.getProducts();
  }

  return (
    <div id="Catalogo-Container">
      <div id="Catalogo-Lista-Container">
        <lu id="Catalogo-Lista">Categorias</lu>
        {props.categories &&
          props.categories.map((cat) => (
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
                price={prod.price}
                volume={prod.volume}
              ></ProductCard>

            </Link>
          </div>
        ))}
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
