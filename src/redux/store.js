import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

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
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	},
};

export default store;

window.state = store;
