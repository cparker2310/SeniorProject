const jwt= require("jsonwebtoken");

const auth= (request, response, next) => {
    const token= request.header("x-auth-token");

    if (!token)
        return response.status(401).send("Access Denied");
    
    try {
        const secretKey= process.env.JWT_SECRET_KEY;
        const user= jwt.verify(token, secretKey);

        request.user= user;
        next();
    } catch (error) {
        response.status(400).send("Access Denied");
    }
}

const isAdmin= (request, response, next) => {
    auth(request, response, () => {
        if (request.user.isAdmin) {
            next();
        } else {
            response.status(403).send("Access Denied");
        }
    });
}

module.exports= { auth, isAdmin };