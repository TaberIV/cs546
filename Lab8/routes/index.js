const formRoute = require("./form");
//const resultRoute = require("./result");

function constructorMethod(app) {
    app.use('/', formRoute);
    //app.use('/result', resultRoute);
    
    app.use("*", (req, res) => {
        res.status(404).json({error: "Route not found."});
    });
};

module.exports = constructorMethod;