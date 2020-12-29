const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

const profileReducer = (state, action) => {
	if (action.type === ADD_POST) {
		let newPost = {
			id: 5,
			message: state.newPostText,
			likesCount: 42,
		};
		state.posts.push(newPost);
	} else if (action.type === UPDATE_POST) {
		state.newPostText = action.newText;
	}

	return state;
};

export default profileReducer;
