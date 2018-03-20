const mongoCollections = require("./mongoCollections");
const uuidv4 = require('uuid/v4');
const todoItems = mongoCollections.todoItems;


async function createTask(title, description) {
	if (!title)
		throw "Must provide title for task";
	if (!description)
		throw "Must provide description for task"

	const todoCollection = await todoItems();

	const newTask = {
		_id: uuidv4(),
		title: title,
		description: description,
		completed: false,
		completedAt: null
	};

	const inseretInfo = await todoCollection.insertOne(newTask);
	if(inseretInfo.insertedCount === 0) throw "Could not add task";

	return newTask._id;
}

async function getAllTasks () {
	const todoCollection = await todoItems();
	const tasks = await todoCollection.find({}).toArray();

	return tasks;
}

async function getTask(id) {
	if (!id)
		throw "You must provide a task id"

	const taskCollection = await todoItems();
	const task = await taskCollection.findOne({ _id: id });

	if (task === null)
		throw "No task with that id";

	return task;
}

async function completeTask(id) {
	if (!id)
		throw "You must provide a task id"

	var task = await getTask(id);

	task.completed = true;
	task.completedAt = Date.now();

	const taskCollection = await todoItems();
	const updatedInfo = await taskCollection.replaceOne({ _id: id }, task);

	if (updatedInfo.modifiedCount === 0)
		throw "could not update task";

	return await this.getTask(id);
}

async function removeTask(id) {
	const taskCollection = await todoItems();
	const deletionInfo = await taskCollection.removeOne({ _id: id });

	if (deletionInfo.deletedCount === 0)
		throw `Could not delete post with id: ${id}`;
}

module.exports = {
	createTask,
	getAllTasks,
	getTask,
	completeTask,
	removeTask
}