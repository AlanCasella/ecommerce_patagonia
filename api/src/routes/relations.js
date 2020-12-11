const server = require("express").Router();
const { Product, Category } = require("../db.js");

/////////////////// S17 //////////////////
server.post("/:idProducto/category/:idCategoria", async (req, res) => {
  try {
    const { idProducto, idCategoria } = req.params;

    const product = await Product.findByPk(idProducto);
    !product && res.sendStatus(404);

    const category = await Category.findByPk(idCategoria);
    !category && res.sendStatus(404);

    product.addCategory(category);
    res.send(product).status(200);
  } catch {
    res.sendStatus(500);
  }
});

server.delete("/:idProducto/category/:idCategoria", async (req, res) => {
  try {
    const { idProducto, idCategoria } = req.params;

    const product = await Product.findByPk(idProducto);
    !product && res.sendStatus(404);

    const category = await Category.findByPk(idCategoria);
    !category && res.sendStatus(404);

    product.removeCategory(category);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});
////////////////////// S17 ///////////////////

module.exports = server;