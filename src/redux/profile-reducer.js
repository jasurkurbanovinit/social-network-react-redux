const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you ?', likesCount: 12 },
		{ id: 2, message: 'Yo Tima', likesCount: 24 },
		{ id: 3, message: 'Hello World', likesCount: 20 },
		{ id: 4, message: 'How are you?', likesCount: 10 },
	],
	newPostText: 'it-jasur-school.com',
};
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 42,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
		case UPDATE_POST:
			return { ...state, newPostText: action.newText };
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_POST,
	newText: text,
});

export default profileReducer;
