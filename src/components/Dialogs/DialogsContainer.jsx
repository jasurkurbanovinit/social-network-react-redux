import React from 'react';
import Dialogs from './Dialogs';
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from './../../redux/dialogs-reducer';
import StoreContext from '../../store-context';

const DialoguesContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				//let state = props.store.getState().dialogPage;
				const onSendMessageClick = () => {
					store.dispatch(sendMessageCreator());
				};

				const onNewMessageChange = (body) => {
					store.dispatch(updateNewMessageBodyCreator(body));
				};

				return (
					<Dialogs
						updateNewMessageBody={onNewMessageChange}
						sendMessage={onSendMessageClick}
						dialogsPage={store.getState().dialogPage}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};

export default DialoguesContainer;
