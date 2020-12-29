import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div className={s.banner}>
				<img src='https://cdn.pixabay.com/photo/2020/08/25/18/28/workplace-5517744_960_720.jpg' />
			</div>
			<div className={s.descriptionBlock}>ava+description</div>
		</div>
	);
};

export default ProfileInfo;
