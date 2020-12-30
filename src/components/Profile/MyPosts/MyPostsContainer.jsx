import React from 'react';
import MyPosts from './MyPosts';
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import StoreContext from '../../../store-context';

const MyPostsContainer = (props) => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				//let state = props.store;
				const addPost = () => {
					store.dispatch(addPostActionCreator());
				};
				const onPostChange = (text) => {
					store.dispatch(updateNewPostTextActionCreator(text));
				};
				return (
					<MyPosts
						addPost={addPost}
						updateNewPostText={onPostChange}
						posts={store.getState().profilePage.posts}
						newPostText={store.getState().profilePage.newPostText}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};

export default MyPostsContainer;
