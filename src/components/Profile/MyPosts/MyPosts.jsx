import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	const postsElements = props.posts.map((p) => (
		<Post message={p.message} likesCount={p.likesCount} />
	));

	let newPostElement = React.createRef();

	const onAddPost = () => {
		props.addPost();
	};

	const onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
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
					<button onClick={onAddPost}>Add post</button>
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
