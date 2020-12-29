const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

const dialogsReducer = (state, action) => {
	if (action.type === UPDATE_MESSAGE) {
		state.newMessageBody = action.body;
	} else if (action.type === ADD_MESSAGE) {
		let body = state.newMessageBody;
		state.messages.push({ id: 9, message: body });
	}

	return state;
};

export default dialogsReducer;
