/*const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controller/userController');
const path = require('path');
//const auth = require('../middlewares/authMiddleware');

const { body } = require('express-validator');
const { nextId } = require('../model/users');
const guestMiddleware = require('../middlewares/guestMiddleware');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const loggedMiddleware = require('../middlewares/loggedMiddleware')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/imageUser'))
    },
    filename: (req, file, cb) => {
        const newFileName = 'usuario' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName)
    }
});

const upload = multer({ storage });

const validations = [
    body('nombre').notEmpty().withMessage('El campo no puede estar vacio'),
    body('email').isEmail().withMessage('Ingrese un email valido'),
    body('clave').isLength({ min: 8 }).withMessage('Ingrese al menos 8 caracteres'),

]


router.get('/registro', loggedMiddleware, userController.register);

router.post('/registro', upload.single('imagenAvatar'), validations, userController.registerPro);

router.get('/inicio-sesion',loggedMiddleware, userController.login);

router.post('/inicio-sesion',userController.loginPro);

router.get('/profile', guestMiddleware, userController.profile);

router.get('/logout', guestMiddleware, userController.logout);

module.exports = router












//router.get('/admintable', userController.table)
//router.get('/adminlistar', userController.listar)*/