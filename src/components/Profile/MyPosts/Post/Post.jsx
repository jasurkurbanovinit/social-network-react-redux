import React from 'react';
import s from './Post.module.css';

const Posts = ({ message, likesCount }) => {
	return (
		<div className={s.item}>
			<img src='https://cdn.iconscout.com/icon/free/png-512/avatar-1659503-1410025.png' />
			{message}
			<div>
				<span>{likesCount} likes</span>
			</div>
		</div>
	);
};

export default Posts;
