import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you ?', likesCount: 12 },
				{ id: 2, message: 'Yo Tima', likesCount: 24 },
				{ id: 3, message: 'Hello World', likesCount: 20 },
				{ id: 4, message: 'How are you?', likesCount: 10 },
			],
			newPostText: 'it-jasur-school.com',
		},
		dialogsPage: {
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
		},
		sidebar: {
			friends: [
				{
					id: 1,
					img:
						'https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg',
					name: 'Amir',
				},
				{
					id: 2,
					img:
						'https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg',
					name: 'Jasur',
				},
				{
					id: 3,
					img:
						'https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg',
					name: 'Alex',
				},
			],
		},
	},
	_callSubscriber() {
		console.log('State changed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText || 'hello',
				likesCount: 42,
			};
			this._state.profilePage.posts.push(newPost);
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_POST) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_MESSAGE) {
			// console.log('My action', action.body);
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		} else if (action.type === ADD_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.messages.push({ id: 9, message: body });
			this._callSubscriber(this._state);
		}
	},
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_POST,
	newText: text,
});
export const sendMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
	type: UPDATE_MESSAGE,
	body: text,
});

export default store;

window.state = store;
