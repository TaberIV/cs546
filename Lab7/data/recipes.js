const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuidv4 = require('uuid/v4');

// Returns only the id and title of all recipies
async function getAllRecipes() {
	let recipeCollection = await recipes();
	let allRecipes = await recipeCollection.find({}, {id: 1, title: 1}).toArray();

	let outputRecipes = [];
	for (let i = 0; i < allRecipes.length; i++)
		outputRecipes.push({_id: allRecipes[i]._id, title: allRecipes[i].title})

	return outputRecipes;
}

// Returns all data of indicated recipe
async function getRecipeById(id) {
	// Argument checking
	if (!id)
		throw "Invalid Id";

	// Get recipe
	let recipeCollection = await recipes();
	let recipe = await recipeCollection.findOne({_id: id});

	if (!recipe)
		throw "Recipe not found.";

	return recipe;
}

async function createRecipe(title, ingredients, steps) {
	// Argument checking
	if (typeof title !== "string") throw "Must provide title as string"
	if (!Array.isArray(ingredients)) throw "Must provide ingredients as Array"
	if (!Array.isArray(steps)) throw "Must provide steps as Array"
	
	try {
		for (let i = 0; i < ingredients.length; i++) {
			if (Object.keys(ingredients[i])[0] != "name")
				throw "";
			if (Object.keys(ingredients[i])[1] != "amount")
				throw "";
		}
	} catch (e) {
		console.log(e);
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
	return await getRecipeById(newRecipe._id);
}

async function replaceRecipe(id, newRecipe) {
	// Argument checking
	if (!id) throw "Invalid Id";
	if (typeof newRecipe.title !== "string") throw "Must provide title as string";
	if (!Array.isArray(newRecipe.ingredients)) throw "Must provide ingredients as Array";
	if (!Array.isArray(newRecipe.steps)) throw "Must provide steps as Array";

	try {
		for (let i = 0; i < newRecipe.ingredients.length; i++) {
			if (Object.keys(newRecipe.ingredients[i])[0] != "name")
				throw "";
			if (Object.keys(newRecipe.ingredients[i])[1] != "amount")
				throw "";
		}
	} catch (e) {
		console.log(e);
		throw "Ingredients must be an array of objects with name and amount.";
	}

	// Get recipes
	let recipeCollection = await recipes();
	await recipeCollection.updateOne({_id: id}, {$set: newRecipe});
	return await getRecipeById(id);
}

async function updateRecipe(id, updates) {
	// Argument checking
	if (!id) throw "Invalid Id";
	if (updates.title && typeof updates.title !== "string")
		throw "Must provide title as string";
	if (updates.ingredients && !Array.isArray(updates.ingredients))
		throw "Must provide ingredients as Array";
	if (updates.steps && !Array.isArray(updates.steps))
		throw "Must provide steps as Array";

	if (updates.ingredients) {
		try {
			for (let i = 0; i < updates.ingredients.length; i++) {
				if (Object.keys(updates.ingredients[i])[0] != "name")
					throw "";
				if (Object.keys(updates.ingredients[i])[1] != "amount")
					throw "";
			}
		} catch (e) {
			console.log(e);
			throw "Ingredients must be an array of objects with name and amount.";
		}
	}

	// Get recipes
	let recipeCollection = await recipes();
	await recipeCollection.updateOne({_id: id}, {$set: updates});
	return await getRecipeById(id);
}

async function deleteRecipe(id) {
	// Get recipes
	let recipeCollection = await recipes();
	await recipeCollection.removeOne({_id: id});
}

module.exports = {
	getAllRecipes,
	getRecipeById,
	createRecipe,
	replaceRecipe,
	updateRecipe,
	deleteRecipe
}