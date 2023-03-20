const jwt= require("jsonwebtoken");

const authToken= (user) => {
    const secretKey= process.env.JWT_SECRET_KEY;

    const token= jwt.sign(
        {
            _id: user._id,
            firstName: user.firstName,
            maidenName: user.maidenName,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        secretKey
    );
    return token;
}

module.exports= authToken;
