import classes from '../styles/Action.module.css';
const Action = ({ setAction }) => {
	return (
		<div className={classes.cont}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<p style={{ fontSize: '1.3rem', fontWeight: '700', margin: 0 }}>
					Choose actions on selected orders
				</p>
				<p style={{ margin: '0', display: 'flex', columnGap: '0.5rem' }}>
					<button style={{ backgroundColor: '#366EF1', color: '#fff' }}>
						SHIP NOW
					</button>
					<button
						style={{
							width: '2rem',
							border: '1px solid #E4E4E4',
							backgroundColor: '#fff',
						}}
						onClick={() => setAction(false)}
					>
						X
					</button>
				</p>
			</div>
			<div
				style={{
					display: 'flex',
					marginTop: '3rem',
					height: '5rem',
				}}
			>
				<div
					style={{
						flex: '1',
						padding: '1rem',
					}}
				>
					<div className={classes.card}>
						<p style={{ margin: 0 }}>Select Staff</p>
						<p
							style={{
								padding: '0.5rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								border: '1px solid #E4E4E4',
								borderRadius: '8px',
							}}
						>
							<span style={{ fontWeight: '700' }}>M. Mathew</span>
							<span>
								<span
									style={{
										backgroundColor: '#366EF1',
										padding: '0 0.3rem',
										borderRadius: '5px',
									}}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='11'
										height='11'
										viewBox='0 0 24 24'
									>
										<path
											d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
											fill='#fff'
										/>
									</svg>
								</span>
							</span>
						</p>
						<div
							style={{
								boxShadow: '0px 17px 32px #00000029',
								border: '1px solid #F4F4F9',
								borderRadius: '6px',
								padding: '0.7rem',
							}}
						>
							<div className={classes.scroll}>
								<p>M. Mathew</p>
								<p>Name #2</p>
								<p>Name #3</p>
								<p>Name #4</p>
								<p>Name #5</p>
								<p>Name #6</p>
								<p>Name #7</p>
							</div>
							<div style={{ marginTop: '1rem' }}>
								<button style={{ backgroundColor: '#366EF1', color: '#fff' }}>
									Confirm
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						flex: '1',
						padding: '1rem',
					}}
				>
					<div className={classes.card}>
						<p style={{ margin: 0 }}>Select Follow up</p>
						<p
							style={{
								padding: '0.5rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								// border: '1px solid #E4E4E4',
								borderRadius: '8px',
								backgroundColor: '#CEFFCC',
							}}
						>
							<span style={{ color: '#34D12F', fontWeight: '700' }}>
								Confirmed
							</span>
							<span>
								<span
									style={{
										backgroundColor: '#366EF1',
										padding: '0 0.3rem',
										borderRadius: '5px',
									}}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='11'
										height='11'
										viewBox='0 0 24 24'
									>
										<path
											d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
											fill='#fff'
										/>
									</svg>
								</span>
							</span>
						</p>
						<div
							style={{
								boxShadow: '0px 17px 32px #00000029',
								border: '1px solid #F4F4F9',
								borderRadius: '6px',
								padding: '0.7rem',
							}}
						>
							<div className={classes.scroll}>
								<p>Confirmed</p>
								<p>Pending</p>
								<p>Canceled</p>
								<p>Call Back</p>
								<p>option #1</p>
								<p>option #2</p>
								<p>option #3</p>
							</div>
							<div style={{ marginTop: '1rem' }}>
								<button style={{ backgroundColor: '#366EF1', color: '#fff' }}>
									Confirm
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						flex: '1',
						padding: '1rem',
					}}
				>
					<div className={classes.card}>
						<p style={{ margin: 0 }}>Select Delivery Status</p>
						<p
							style={{
								padding: '0.5rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								// border: '1px solid #E4E4E4',
								borderRadius: '8px',
								backgroundColor: '#FFCCD5',
							}}
						>
							<span style={{ color: '#FF002B', fontWeight: '700' }}>
								Cancelled
							</span>
							<span>
								<span
									style={{
										backgroundColor: '#366EF1',
										padding: '0 0.3rem',
										borderRadius: '5px',
									}}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='11'
										height='11'
										viewBox='0 0 24 24'
									>
										<path
											d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
											fill='#fff'
										/>
									</svg>
								</span>
							</span>
						</p>
						<div
							style={{
								boxShadow: '0px 17px 32px #00000029',
								border: '1px solid #F4F4F9',
								borderRadius: '6px',
								padding: '0.7rem',
							}}
						>
							<div className={classes.scroll}>
								<p>Confirmed</p>
								<p>Pending</p>
								<p>Canceled</p>
								<p>In Transit</p>
								<p>option #1</p>
								<p>option #2</p>
								<p>option #3</p>
							</div>
							<div style={{ marginTop: '1rem' }}>
								<button style={{ backgroundColor: '#366EF1', color: '#fff' }}>
									Confirm
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						flex: '1',
						padding: '1rem',
					}}
				>
					<div className={classes.card}>
						<p style={{ margin: 0 }}>Select Staff</p>
						<p
							style={{
								padding: '0.5rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								// border: '1px solid #E4E4E4',
								borderRadius: '8px',
								backgroundColor: '#FFF7CC',
							}}
						>
							<span style={{ color: '#FCAF09' }}>Pending</span>
							<span>
								<span
									style={{
										backgroundColor: '#366EF1',
										padding: '0 0.3rem',
										borderRadius: '5px',
									}}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='11'
										height='11'
										viewBox='0 0 24 24'
									>
										<path
											d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
											fill='#fff'
										/>
									</svg>
								</span>
							</span>
						</p>
						<div
							style={{
								boxShadow: '0px 17px 32px #00000029',
								border: '1px solid #F4F4F9',
								borderRadius: '6px',
								padding: '0.7rem',
							}}
						>
							<div className={classes.scroll}>
								<p>Pending</p>
								<p>Paid</p>
								<p>Cancelled</p>
								<p>Refunded</p>
							</div>
							<div style={{ marginTop: '1rem' }}>
								<button style={{ backgroundColor: '#366EF1', color: '#fff' }}>
									Confirm
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Action;
