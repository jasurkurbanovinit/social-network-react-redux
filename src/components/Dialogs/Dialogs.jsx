import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	));

	let messagesElements = props.dialogsPage.messages.map((m) => (
		<Message message={m.message} />
	));

	let newMessageBody = props.dialogsPage.newMessageBody;

	const onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};

	const onSendMessageClick = () => {
		props.sendMessage();
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

export default Dialogs;
