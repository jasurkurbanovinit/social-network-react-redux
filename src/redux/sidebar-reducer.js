let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
	return state;
};

export default sidebarReducer;
