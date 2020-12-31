import React from 'react';
import s from './users.module.css';
function Users(props) {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				photoUrl:
					'https://tse3.mm.bing.net/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&pid=Api&P=0&w=300&h=300',
				followed: false,
				fullName: 'Jasur',
				status: 'I am a boss',
				location: { city: 'Minsk', country: 'Belarus' },
			},
			{
				id: 2,
				photoUrl:
					'https://tse3.mm.bing.net/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&pid=Api&P=0&w=300&h=300',
				followed: true,
				fullName: 'Sasha',
				status: 'I am Sasha web developer',
				location: { city: 'Dnepr', country: 'Ukrain' },
			},
			{
				id: 3,
				photoUrl:
					'https://tse3.mm.bing.net/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&pid=Api&P=0&w=300&h=300',
				followed: false,
				fullName: 'Vladiko',
				status: 'I am school boy',
				location: { city: 'Moscow', country: 'Russia' },
			},
		]);
	}
	return (
		<div>
			{props.users.map((u) => (
				<div key={u.id}>
					<span>
						<div>
							<img src={u.photoUrl} alt='ava' className={s.userPhoto} />
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										props.unfollow(u.id);
									}}>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										props.follow(u.id);
									}}>
									Follow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
}

export default Users;
