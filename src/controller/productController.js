
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;


let productController = {
    listar: (req, res) =>{
        db.Product.findAll()
            .then( products => {
                return res.render(path.resolve(__dirname, '..', 'views',  'listadoProductos'),{products})
            })
        
    },
    listarDelete: (req, res) =>{
        let productos = productModel.filter('deleted');
        res.render('listadoProductosDeleted', {productos})
    },
    edit: (req, res) => {
        let product = productModel.find(req.params.id);
        if(product){
            res.render('edit', { product })
        }   
    },
    detail: (req, res) => {
        let product = productModel.find(req.params.id)
        res.render('detail-product', { product })
    },
    create: (req, res) => {
        res.render('create')
    },
    store: (req, res)=>{
            const product = req.body;
            product.image = req.file ? req.file.filename : '';
            productModel.create(product);
            res.redirect('/productos/listar')
    },
    update: (req, res) =>{
        let  product = req.body;
        product.id = req.params.id;
        product.image = req.file ? req.file.filename : req.body.oldImagen;
        if (req.body.image===undefined) {
            product.image = product.oldImage
        }
        delete product.oldImage;
        productModel.update(product);
        if(product.status == 'live'){
        res.redirect('/productos/listar')
            }else{
                res.redirect('/productos/listarborrado')
            }
    },
    destroy: (req, res) => {
        productModel.delete(req.params.id); 
        res.redirect('/productos/listar')
    },
    recover: (req, res) => {
        productModel.recover(req.params.id);
        res.redirect('/productos/listarborrado')
    }
    
}

module.exports = productController
