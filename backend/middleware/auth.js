const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];   //bearer 1234
        const decodedToken = jwt.verify(token, 'topsecret');
        req.userData = { userId: decodedToken.userId }
        next();
    } catch (err) {
        res.status(401).json({ message: 'Auth failed' });
    }

}

module.exports = authenticate;