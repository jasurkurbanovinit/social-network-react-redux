import React from 'react';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<img
				alt='logo'
				src='https://logosrated.net/wp-content/uploads/parser/WHO-Logo-1.png'
			/>
		</header>
	);
};

export default Header;
