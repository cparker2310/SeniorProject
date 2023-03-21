const jwt= require("jsonwebtoken");

const authToken= (user) => {
    const secretKey= process.env.JWT_SECRET_KEY;

    const token= jwt.sign(
        {
            _id: user._id,
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            maidenName: user.maidenName,
            classYear: user.classYear,
            currentCity: user.currentCity,
            currentState: user.currentState,
            universityName: user.universityName,
            degree: user.degree,
            areaStudy: user.areaStudy,
            gradYear: user.gradYear,
            position: user.position,
            companyName: user.companyName,
            industry: user.industry,
            email2: user.email2,
            phone: user.phone,
            isAdmin: user.isAdmin,
        },
        secretKey
    );
    return token;
}

module.exports= authToken;
