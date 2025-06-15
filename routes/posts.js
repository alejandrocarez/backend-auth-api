const express = require('express');
const router = express.Router();
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');


router.get('/public', (req, res) => {
  res.json({ message: 'Ruta pública: cualquiera puede verla' });
});


router.get('/private', verifyToken, (req, res) => {
  res.json({ message: `Ruta protegida: Hola, ${req.user.id}!`, user: req.user });
});


router.delete('/admin', verifyToken, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Ruta solo para administradores' });
});

module.exports = router;
