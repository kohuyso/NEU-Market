const getData = (key) => {
	try {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	} catch (error) {
		return null;
	}
};

const setData = (key, value) => {
	try {
		if (value) {
			localStorage.setItem(key, JSON.stringify(value));
			return true;
		}
		return false;
	} catch (error) {
		return false;
	}
};

const removeData = (key) => {
	try {
		localStorage.removeItem(key);
		return true;
	} catch (error) {
		return false;
	}
};

const Storage = {
	getData,
	setData,
	removeData,
};

export default Storage;