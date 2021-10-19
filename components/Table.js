import { useState } from 'react';
import classes from '../styles/table.module.css';
import Navbar from './Navbar';
const Table = () => {
	const [data, setData] = useState([
		{
			id: '#123123',
			date: '12/28/1221',
			time: '02:20:12',
			shopify: 'shopify',
			product: 'arm chair',
			qty: '1',
			dims: '123 x 213 x 21300',
			Volume: '12Kg',
			Entered: '10kg',
			rs: '7654',
			status: 'Pending',
			cust: 'Aman Kumar',
			phNum: '1234567890',
			mail: 'random@mail.com',
			staff: 'D.mathews',
			FollowUp: 'pending',
			Delivery: 'Pending',
			CS: 3,
			DS: 7,
		},
		{
			id: '#123123',
			date: '12/28/1221',
			time: '02:20:12',
			shopify: 'shopify',
			product: 'arm chair',
			qty: '1',
			dims: '123 x 213 x 213',
			Volume: '12Kg',
			Entered: '10kg',
			rs: '7654',
			status: 'Paid',
			cust: 'Aman Kumar',
			phNum: '1234567890',
			mail: 'random@mail.com',
			staff: 'D.mathews',
			FollowUp: 'pending',
			Delivery: 'Pending',
			CS: 3,
			DS: 7,
		},
	]);
	return (
		<div className={classes.container}>
			<Navbar />
			<div className={classes.pageInfo}>
				<div className={classes.infoLeft}>
					<p>Orders</p>
					<p>1 ORDER SELECTED</p>
					<p>
						<span> Take Actions</span>
					</p>
				</div>
				<div className={classes.infoRight}>
					<input
						style={{
							height: '2rem',
							borderRadius: '4px',
							border: 'none',
							padding: '0.2rem 0.2rem',
						}}
						type='date'
						name='date'
						id='date'
					/>
					<input
						type='text'
						style={{
							height: '2rem',
							borderRadius: '4px',
							border: 'none',
							padding: '0.2rem 0.2rem',
						}}
						name='text'
						id='text'
						placeholder='Search'
					/>
					<span
						style={{
							height: '2rem',
							width: '2rem',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: '4px',
						}}
					>
						<svg
							id='filter_icon'
							data-name='filter icon'
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
						>
							<path
								id='container'
								d='M4,0H20a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z'
								transform='translate(24) rotate(90)'
								fill='#fff'
								opacity='0'
							/>
							<path
								id='filter_icon-2'
								data-name='filter icon'
								d='M11.437,0H.563a.563.563,0,0,0-.4.96L4.5,5.3v4.83a.563.563,0,0,0,.24.461L6.615,11.9a.563.563,0,0,0,.885-.461V5.3L11.835.96A.563.563,0,0,0,11.437,0Z'
								transform='translate(6 6)'
								fill='#366ef1'
							/>
						</svg>
					</span>
					<span
						style={{
							height: '2rem',
							width: '2rem',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: '4px',
						}}
					>
						<svg
							id='export_icon'
							data-name='export icon'
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
						>
							<path
								id='container'
								d='M4,0H20a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z'
								transform='translate(24) rotate(90)'
								fill='#fff'
								opacity='0'
							/>
							<path
								id='Icon_material-file-upload'
								data-name='Icon material-file-upload'
								d='M10.357,13.676h4.286V9.441H17.5L12.5,4.5l-5,4.941h2.857ZM7.5,15.088h10V16.5H7.5Z'
								transform='translate(-0.5 1.5)'
								fill='#366ef1'
							/>
						</svg>
					</span>
					<button
						style={{
							height: '2rem',
							backgroundColor: '#366EF1',
							color: '#fff',
							border: 'none',
							padding: '0 1rem',
						}}
					>
						Create Order
					</button>
				</div>
			</div>
			<div className={classes.table}>
				<table cellSpacing='0' className={classes.tb}>
					<tr style={{ marginBottom: '1rem' }}>
						<th style={{ display: 'flex' }}>
							<span>
								<input
									type='checkbox'
									name='orderId'
									id='orderId'
									style={{ display: 'none' }}
								/>
								<label
									htmlFor='orderId'
									style={{
										borderRadius: '5px',
										border: '1px solid #fff',
										padding: '0 0.6rem',
										height: '1rem',
										width: '1rem',
									}}
								></label>
							</span>
							<span>Order Id</span>
						</th>
						<th>Channels</th>
						<th>Products</th>
						<th>Dinmensions</th>
						<th>Payments</th>
						<th>Customers</th>
						<th>Staffs</th>
						<th>Follow Ups</th>
						<th>Delivery Status</th>
						<th>CS</th>
						<th>DS</th>
						<th>Actions</th>
					</tr>
					<tr></tr>
					{data.map((data, index) => {
						return (
							<tr key={index}>
								<td style={{ display: 'flex', columnGap: '0.4rem' }}>
									<span style={{ display: 'flex', alignItems: 'center' }}>
										<input
											type='checkbox'
											name={'id' + index}
											id={'id' + index}
											style={{ display: 'none' }}
										/>
										<label
											htmlFor={'id' + index}
											style={{
												borderRadius: '5px',
												border: '1px solid #366EF1',
												height: '1.2rem',
												width: '1.2rem',
											}}
										></label>
									</span>
									<div>
										<p>{data.id}</p>
										<p>{data.date}</p>
										<p>{data.time}</p>
									</div>
								</td>
								<td>{data.shopify}</td>
								<td>
									<p
										style={{
											whiteSpace: 'nowrap',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
										}}
									>
										{data.product}
									</p>
									<p>Qty : {data.qty}</p>
								</td>
								<td>
									<p style={{ display: 'flex', columnGap: '0.5rem' }}>
										<span
											style={{
												whiteSpace: 'nowrap',
												overflow: 'hidden',
												textOverflow: 'ellipsis',
											}}
										>
											{data.dims}
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
													width='7.9'
													height='7.9'
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
									<p>Volumetric : {data.Volume}</p>
									<p>Entered : {data.Entered}</p>
								</td>
								<td>
									<p>Rs. {data.rs}</p>
									<p>
										<span
											style={{
												padding: '0.2rem 0.5rem',
												backgroundColor: `${
													data.status == 'Pending' ? '#FFCCD5' : '#CEFFCC'
												}`,
												borderRadius: '10px',
												color: `${
													data.status == 'Pending' ? '#FF002B' : '#00E3A5'
												}`,
											}}
										>
											{data.status}
										</span>{' '}
										<span
											style={{
												backgroundColor: '#366EF1',
												padding: '0 0.3rem',
												borderRadius: '5px',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='7.9'
												height='7.9'
												viewBox='0 0 24 24'
											>
												<path
													d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
													fill='#fff'
												/>
											</svg>
										</span>
									</p>
								</td>
								<td>
									<p>{data.cust}</p>
									<p
										style={{
											whiteSpace: 'nowrap',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
										}}
									>
										{data.phNum}
									</p>
									<p
										style={{
											whiteSpace: 'nowrap',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
										}}
									>
										{data.mail}
									</p>
								</td>
								<td>
									<p
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											columnGap: '0.4rem',
										}}
									>
										<span style={{ fontWeight: '700', color: '#366EF1' }}>
											{data.staff}
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
													width='7.9'
													height='7.9'
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
								</td>
								<td>
									<p
										style={{
											backgroundColor: '#FFF7CC',
											color: '#FCAF09',
											padding: '0.4rem 0.1rem',
											borderRadius: '10px',
											display: 'flex',
											justifyContent: 'space-between',
											padding: '0.5rem',
										}}
									>
										<span>{data.FollowUp}</span>
										<span
											style={{
												backgroundColor: '#366EF1',
												padding: '0 0.3rem',
												borderRadius: '5px',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='7.9'
												height='7.9'
												viewBox='0 0 24 24'
											>
												<path
													d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
													fill='#fff'
												/>
											</svg>
										</span>
									</p>
								</td>
								<td>
									<p
										style={{
											backgroundColor: '#FFF7CC',
											color: '#FCAF09',
											padding: '0.4rem 0.1rem',
											borderRadius: '10px',
											display: 'flex',
											justifyContent: 'space-between',
											padding: '0.5rem',
										}}
									>
										<span>{data.Delivery}</span>
										<span
											style={{
												backgroundColor: '#366EF1',
												padding: '0 0.3rem',
												borderRadius: '5px',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='7.9'
												height='7.9'
												viewBox='0 0 24 24'
											>
												<path
													d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
													fill='#fff'
												/>
											</svg>
										</span>
									</p>
								</td>
								<td>
									<p>{data.CS}</p>
								</td>
								<td>
									<p>{data.DS}</p>
								</td>
								<td>
									<p
										style={{
											padding: 0,
											display: 'flex',
											justifyContent: 'space-around',
											columnGap: '0.2rem',
										}}
									>
										<span
											style={{
												flex: 1,
												borderRadius: '50%',
												padding: '0.5rem 0',
												backgroundColor: '#CCDBFF',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='10'
												height='10'
												viewBox='0 0 24 24'
											>
												<path
													d='M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z'
													fill='#366EF1'
												/>
											</svg>
										</span>
										<span
											style={{
												flex: '1',
												padding: '0.5rem 0',
												borderRadius: '50%',
												backgroundColor: '#F2E8FF',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='12'
												height='10'
												viewBox='0 0 12 10'
											>
												<path
													id='shipment_icon_12x12'
													data-name='shipment icon 12x12'
													d='M14.571,11.169l-1.5-3.077h-2.25V6.553a.762.762,0,0,0-.75-.769H3.321a.762.762,0,0,0-.75.769v6.154l.75.769h.951a1.561,1.561,0,0,0-.2.769,1.5,1.5,0,1,0,3,0,1.561,1.561,0,0,0-.2-.769h4.152a1.561,1.561,0,0,0-.2.769,1.5,1.5,0,1,0,3,0,1.561,1.561,0,0,0-.2-.769h.951V11.169Zm-3.75,0V8.861h1.555L13.5,11.169Z'
													transform='translate(-2.57 -5.784)'
													fill='#8736F1'
												/>
											</svg>
										</span>
									</p>
								</td>
							</tr>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default Table;
