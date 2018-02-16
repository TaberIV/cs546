const uuidv4 = require('uuid/v4');

async function createTask(title, description) {
	return {
		_id: uuidv4();
		title: title,
		description: description,
		completed: false,
		completedAt: null
	}
}
