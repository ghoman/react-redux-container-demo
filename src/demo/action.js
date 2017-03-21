export const changeContent = (content) => {
	return {
		content
	};
};

export const changeColor = (color) => {
	return {
		color
	}
};

export const updateHistory = (history) => {
	return {
		historyContents: history
	}
};