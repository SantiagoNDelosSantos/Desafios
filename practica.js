class ProductManager {
    
    constructor() {
        this.products = [];
        this.currentId = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios");
        return;
        }

    const existingProduct = this.products.find((product) => product.code === code);
        if (existingProduct) {
        console.log("Ya existe un producto con ese código");
        return;
        }

    const newProduct = {
        id: ++this.currentId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };
    
    this.products.push(newProduct);
    console.log("Producto agregado correctamente");
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
        console.log("Producto no encontrado");
        return null;
        }
        return product;
        }
    }

    const productManager = new ProductManager();

    function showProducts() {
    console.log(productManager.getProducts());
    }

    function addProduct() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const thumbnail = document.getElementById("thumbnail").value;
    const code = document.getElementById("code").value;
    const stock = document.getElementById("stock").value;

    productManager.addProduct(title, description, price, thumbnail, code, stock);
    }

    document.getElementById("show-products").addEventListener("click", showProducts);
    document.getElementById("add-product").addEventListener("click", addProduct);

    function showProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    const products = productManager.getProducts();
    products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.thumbnail}</td>
        <td>${product.code}</td>
        <td>${product.stock}</td>
    `;
    productList.appendChild(row);
    });
}