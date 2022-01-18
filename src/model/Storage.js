export const storage = {
	setItem: (name, item) => {
		localStorage.setItem(name, JSON.stringify(item));
	},
	getItem: (name) => {
		const item = localStorage.getItem(name);
		console.log('item: ', item);
		if (item) {
			console.log('item: 2 ', item);
			console.log('JSON.parse(item): ', JSON.parse(item));
			return JSON.parse(item);
		}
	},
};