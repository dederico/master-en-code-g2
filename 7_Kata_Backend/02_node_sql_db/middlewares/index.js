const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env.JWT_SECRET


module.exports = {
  /* 
  Un middleware es aquella función
  que tiene acceso a los objetos 
  req y res.

  Así el middleware puede modificar o validar
  datos que aparezcan en estos objetos y 
  responder inmediatamente al cliente.
*/
  showTime: (req, res, next) => {
    console.log('Timestamp: ', Date.now());
    console.log(req.method, req.url);
    next();
  },
  verifyToken: async (req, res, next) => {
    const { authorization } = req.headers;
    // Bearer header.payload.token
    try {
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log(token)
      req.user = decoded
      console.log(decoded)
      next();
    } catch (error) {
      return res.status(500).json({ error: "unauthorized, you must provide Authorization as 'Bearer token'" });
    }

  }


}
