const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_MESSAGE:
			state.newMessageBody = action.body;
			return state;
		case ADD_MESSAGE:
			let body = state.newMessageBody;
			state.messages.push({ id: 9, message: body });
			return state;
		default:
			return state;
	}
};

export const sendMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
	type: UPDATE_MESSAGE,
	body: text,
});

export default dialogsReducer;
