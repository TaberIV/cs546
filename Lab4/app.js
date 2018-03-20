const todo = require("./todo");

async function main() {
	try {
		console.log("Clear database...");
		var allTasks = await (todo.getAllTasks());
		for (var i = 0; i < allTasks.length; i++) {
			await todo.removeTask(allTasks[i]._id);
			console.log(`Element ${i} destroyed.`)
		}
	} catch (e) {
		console.log(e);
	}

	var dinoId = -1;
	try {
		console.log("\nFirst task: ")
		dinoId = await (todo.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"));
		console.log(await (todo.getTask(dinoId)));
	} catch (e) {
		console.log(e);
	}

	var lordHelixId;
	try {
		console.log("\nSecond task: ")
		lordHelixId = await (todo.createTask("Play Pokemon with Twitch TV", 
			"Should we revive Helix?"));
		console.log(await (todo.getTask(lordHelixId)));
	} catch (e) {
		console.log(e);
	}

	try {
		console.log("\nAll tasks: ")
		allTasks = await (todo.getAllTasks());
		console.log(allTasks);
	} catch (e) {
		console.log(e);
	}

	try {
		console.log("\nRemove first task: ");
		todo.removeTask(dinoId);
		console.log("\nAll tasks: ")
		allTasks = await (todo.getAllTasks());
		console.log(allTasks);
	} catch (e) {
		console.log(e);
	}

	try {
		console.log("\nComplete remaining task");
		await todo.completeTask(lordHelixId);
		console.log(await todo.getTask(lordHelixId));
	} catch (e) {
		console.log(e);
	}


}

main();