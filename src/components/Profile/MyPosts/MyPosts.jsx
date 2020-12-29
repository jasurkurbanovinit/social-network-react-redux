import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from './../../../redux/profile-reducer';
const MyPosts = (props) => {
	const postsElements = props.posts.map((p) => (
		<Post message={p.message} likesCount={p.likesCount} />
	));

	let newPostElement = React.createRef();

	const addPost = () => {
		props.dispatch(addPostActionCreator());
	};

	const onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostTextActionCreator(text));
	};
	return (
		<div className={s.myPosts}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea
						ref={newPostElement}
						onChange={onPostChange}
						value={props.newPostText}
					/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
				<div>
					<button>Remove</button>
				</div>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
