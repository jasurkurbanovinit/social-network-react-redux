const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState = {
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Victor' },
		{ id: 6, name: 'Valera' },
	],
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'Yo, yo' },
		{ id: 3, message: 'Hello World' },
		{ id: 4, message: 'How are you?' },
		{ id: 5, message: 'Yo 1' },
		{ id: 6, message: 'Yo 2' },
	],
	newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_MESSAGE:
			return {
				...state,
				newMessageBody: action.body,
			};
		case ADD_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, { id: 9, message: body }],
			};
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
