class Productos {
  constructor() {
    this.productos = [
      //   { title: "Producto 1", price: 99, thumbnail: "url de producto 1" },
      //   { title: "Producto 2", price: 99, thumbnail: "url de producto 2" },
      //   { title: "Producto 3", price: 99, thumbnail: "url de producto 3" },
    ];
    this.test = "test";
  }
  generateId() {
    const data = this.productos;
    if (data.length === 0) {
      let id = 1;
      return id;
    }
    let id = data.map((produc) => produc.id);
    return Math.max(...id) + 1;
  }
  save(product) {
    try {
      product.id = this.generateId();
      this.productos.push(product);
      console.log(
        `El producto ${product.title} con ID ${product.id} se guardo correctamente`
      );
      return product.id;
    } catch (error) {
      console.log(error);
    }
  }
  getAll() {
    this.productos.length > 0
      ? this.productos
      : console.log("No hay Productos");
    return this.productos;
  }
  getById(id) {
    try {
      const data = this.productos;
      let itemToFind = data.find((item) => item.id === id);
      //console.log(itemToFind ? itemToFind : null);
      return itemToFind ? itemToFind : { error: "El producto no exixte" };
    } catch (e) {
      console.log(e);
    }
  }
  replaceById(newItem) {
    try {
      const data = this.productos;
      const newProducts = data.map((item) => {
        if (item.id === newItem.id) {
          item = newItem;
          return item;
        } else {
          return item;
        }
      });
      return newProducts
    } catch (error) {}
  }
  deleteById(id) {
    try {
      const data = this.productos;
      const newData = data.filter((item) => item.id !== id);
      return newData;
    } catch (error) {
      console.log(error);
    }
  }
}
//export { Productos };
export default Productos
// export default Productos
// module.exports = Productos
