const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuidv4 = require('uuid/v4');

// Returns only the id and title of all recipies
async function getAllRecipes() {
	var recepieCollection = await recipes();
	return await recepieCollection.find({}, {id: 1, title: 1}).toArray();
}

// Returns all data of indicated recipe
async function getRecipeById() {
	// Argument checking
	if (!id)
		throw "Invalid Id";

	// Get recipe
	let recipeCollection = await recipes();
	let recipe = await recipeCOllection.findOne({_id: id});

	if (!recipe)
		throw "Recipe not found.";

	return recipe;
}

async function createRecipe(title, ingredients, steps) {
	// Argument checking
	if (typeof title !== "string") throw "Must provide title as string"
	if (!Array.isArray(ingredients)) throw "Must provide ingredients as Array"
	if (!Array.isArray(steps)) throw "Must provide steps as Array"
	console.log(Object.keys(ingredients[i])[0]);
	console.log(Object.keys(ingredients[i])[1]);
	try {
		// if (Object.keys(ingredients[i])[0] != "name")
		// 	throw "";
		// if (Object.keys(ingredients[i])[1] != "amount")
		// 	throw "";
		console.log(Object.keys(ingredients[i])[0]);
		console.log(Object.keys(ingredients[i])[1]);
	} catch (e) {
		throw "Ingredients must be an array of objects with name and amount.";
	}
	
	// Get recipes
	let recipeCollection = await recipes();
	
	// Create new recipe
	const newRecipe = {
		_id: uuidv4(),
		title: title,
		ingredients: ingredients,
		steps: steps
	};

	// Add new recipe to database
	const insertInformation = await recipeCollection.insertOne(newRecipe);
	//return await getRecipeById(newRecipe._id);
}

async function replaceRecipe(id, newRecipe) {
	// Argument checking
	if (!id) throw "Invalid Id";
	if (typeof newRecipe.title !== "string") throw "Must provide title as string";
	if (!Array.isArray(newRecipe.ingredients)) throw "Must provide ingredients as Array";
	if (!Array.isArray(newRecipe.steps)) throw "Must provide steps as Array";

	try {
		if (Object.keys(ingredients[i])[0] != "name")
			throw "";
		if (Object.keys(ingredients[i])[1] != "amount")
			throw "";
	} catch (e) {
		throw "Ingredients must be an array of objects with name and amount.";
	}

	// Get recipes
	let recipeCollection = await recipes();

}

async function updateRecipe(id, updates) {

}

async function deleteRecipe(id) {

}

module.exports = {
	getAllRecipes,
	getRecipeById,
	createRecipe,
	replaceRecipe,
	updateRecipe,
	deleteRecipe
}