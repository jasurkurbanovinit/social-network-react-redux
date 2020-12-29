import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from './../../redux/dialogs-reducer';
const Dialogues = (props) => {
	let dialogsElements = props.state.dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	));

	let messagesElements = props.state.messages.map((m) => (
		<Message message={m.message} />
	));

	let newMessageBody = props.state.newMessageBody;

	const onNewMessageChange = (e) => {
		let body = e.target.value;
		props.dispatch(updateNewMessageBodyCreator(body));
	};

	const onSendMessageClick = () => {
		props.dispatch(sendMessageCreator());
	};
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>{messagesElements}</div>
			<div className={s.dialogInput}>
				<textarea
					placeholder='Enter your message'
					onChange={onNewMessageChange}
					value={newMessageBody}></textarea>
				<button onClick={onSendMessageClick}>Send message</button>
			</div>
		</div>
	);
};

export default Dialogues;
