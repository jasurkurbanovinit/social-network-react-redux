import React from 'react';
import s from './Dialogs.module.css';
import Dialogs from './Dialogs';
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from './../../redux/dialogs-reducer';

const DialoguesContainer = (props) => {
	let state = props.store.getState().dialogPage;

	const onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};

	const onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	};

	return (
		<Dialogs
			updateNewMessageBody={onNewMessageChange}
			sendMessage={onSendMessageClick}
			dialogsPage={state}
		/>
	);
};

export default DialoguesContainer;
