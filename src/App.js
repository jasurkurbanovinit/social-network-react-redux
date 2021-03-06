import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/profile' render={() => <Profile />} />
				<Route path='/news' component={News} />
				<Route path='/music' component={Music} />
				<Route path='/settings' component={Settings} />
				<Route path='/users' component={UsersContainer} />
			</div>
		</div>
	);
};

export default App;
