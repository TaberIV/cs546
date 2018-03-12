const recipesRoute = require("./recipes");

function constructorMethod(app) {
    app.use('/recipes', recipesRoute);
    
    app.use("*", (req, res) => {
        res.status(404).json({error: "Route not found."});
    });
};

module.exports = constructorMethod;