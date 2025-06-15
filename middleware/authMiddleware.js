const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Token requerido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Almacenar info del usuario en req
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

function authorizeRoles(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'No tienes permisos para acceder' });
    }
    next();
  };
}

module.exports = {
  verifyToken,
  authorizeRoles
};
