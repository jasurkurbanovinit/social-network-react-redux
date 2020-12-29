const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 42,
			};
			state.posts.push(newPost);
			return state;
		case UPDATE_POST:
			state.newPostText = action.newText;
			return state;
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
