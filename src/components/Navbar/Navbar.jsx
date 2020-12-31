import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<MenuLink to='/profile' label='Profile' />
			<MenuLink to='/dialogs' label='Messages' />
			<MenuLink to='/news' label='News' />
			<MenuLink to='/music' label='Music' />
			<MenuLink to='/settings' label='Settings' />

			<div className={s.friends}>
				<div className={s.friendsHeader}>Friends</div>
				{/* <div className={s.friendsContainer}>{friendsList}</div> */}
			</div>
		</nav>
	);
};

export default Navbar;

const MenuLink = ({ to, label }) => {
	return (
		<div className={s.item}>
			<NavLink to={to} activeClassName={s.activeLink}>
				{label}
			</NavLink>
		</div>
	);
};

// const Friends = ({ img, name }) => {
// 	return (
// 		<div className={s.friendsAvatar}>
// 			<img src={img} />
// 			<div className={s.friendsName}>{name}</div>
// 		</div>
// 	);
// };
