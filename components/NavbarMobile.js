import { useState } from 'react';
import classes from '../styles/NavMob.module.css';
import noti from '../public/nav/noti.svg';
import wallet from '../public/nav/wallet.svg';
import Image from 'next/dist/client/image';
const NavMob = ({ width }) => {
	const [navOpen, setNavOpen] = useState(false);
	const [user, setUser] = useState(false);

	const animateMenu = () => {
		var list = document.getElementById('mobMenuList');
		if (!navOpen) {
			list.style.right = '0%';
		} else {
			list.style.right = '-100%';
		}
	};

	return (
		<div className={classes.cont}>
			<div className={classes.body}>
				<div className={classes.logo}>logo here</div>
				<div className={classes.menu}>
					<svg
						onClick={() => {
							setNavOpen(true);
							animateMenu();
							console.log('clicked');
						}}
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path
							d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z'
							fill='#333333'
						/>
					</svg>
				</div>
				<div id='mobMenuList' className={classes.menuList}>
					<div
						style={{
							textAlign: 'right',
							marginBottom: '1rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								columnGap: '1rem',
							}}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 20 20'
								onClick={() => setUser(true)}
							>
								<path
									id='user_icon'
									data-name='user icon'
									d='M16,16a5,5,0,1,0-5-5A5,5,0,0,0,16,16Zm0,2.5c-3.337,0-10,1.675-10,5V26H26V23.5C26,20.175,19.338,18.5,16,18.5Z'
									transform='translate(-6 -6)'
									fill={`${user ? '#0670ed' : '#707070'}`}
								/>
							</svg>
							<Image src={noti} />
						</div>
						<div>
							<svg
								onClick={() => {
									setNavOpen(false);
									animateMenu();
								}}
								style={{ margin: '.8rem -0.3rem' }}
								width='24'
								height='24'
								xmlns='http://www.w3.org/2000/svg'
								fillRule='evenodd'
								clipRule='evenodd'
							>
								<path
									d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z'
									fill='#333333'
								/>
							</svg>
						</div>
					</div>

					<div className={classes.userData}>
						<p>
							<span>
								<span>
									<Image src={wallet} />
								</span>
								<span
									style={{
										color: '#366EF1',
										fontSize: '1.2rem',
										fontWeight: '500',
										letterSpacing: '0.05px',
									}}
								>
									$1234
								</span>
							</span>
						</p>
						<p></p>
					</div>

					<div className={classes.listElements}>
						<p>Orders</p>
						<p>Shipments</p>
						<p>Stores</p>
						<p>Staff</p>
						<p>Billing</p>
						<p>Control Tower</p>
						<p>Reports</p>
						<p>Tickets</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavMob;