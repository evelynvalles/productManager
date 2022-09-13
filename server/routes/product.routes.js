const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product', ProductController.allProducts);
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.put('/api/product/update/:id', ProductController.updateProduct);
    app.delete('/api/product/delete/:id', ProductController.deleteProduct);
}