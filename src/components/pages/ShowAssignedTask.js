import React from 'react';

const ShowAssignedTask = ({ task }) => {
	const {
		title,
		description,
		status,
		assignedBy,
		comments,
		completionDate,
		startDate,
		taskDocs
	} = task;

	return (
		<div className="flex justify-center ml-5 mt-5 text-sm lg:text-lg ">
			<div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between  lg:justify-around border-2  rounded-lg w-screen  lg:w-full mx-5 my-5 p-5">
				<div>
					<div className=" flex flex-col gap-3 justify-center rounded-lg p-1 mb-3">
						<div>
							<span>Title</span>
							<p className="border-2 p-2 rounded-lg">
								{/* {title} */}
								You can implement the widget for unsigned uploading directly
								from the browser to Cloudinary storage
							</p>
						</div>
						<div>
							<span>Description</span>
							<p className="border-2 p-2 rounded-lg">
								{/* {description} */}
								without involving your servers in the process. The widget sends
								JavaScript callbacks on successful uploads, so you can integrate
								the upload process back into your existing media pipeline. You
								can additionally configure Cloudinary to send server-side
								callbacks. Advanced users can also use the Upload widget with
								signed uploads for a more secure process when required. without
								involving your servers in the process. The widget sends
								JavaScript callbacks on successful uploads, so you can integrate
								the upload process back into your existing media pipeline. You
								can additionally configure Cloudinary to send server-side
								callbacks. Advanced users can also use the Upload widget with
								signed uploads for a more secure process when required.
							</p>
						</div>
						<div>
							<span>Status</span>
							<p className="border-2 p-2 rounded-lg">
								{status}
							</p>
						</div>
					</div>
					<div className="border-2 flex  flex-col  gap-2 rounded-lg p-5">
						<div>
							<span>Assigned by : </span>
							<div className="border-2 p-2 rounded-lg">
								<p>
									{assignedBy.name}
								</p>
								<p>
									{assignedBy.role}
								</p>
							</div>
						</div>

						<div />

						<div>
							<span>Contect : </span>
							<p className="border-2 p-2 rounded-lg">
								{assignedBy.email}
							</p>
						</div>
					</div>
				</div>
				{/* <div>
					{taskDocs.map(value => {
						return <img key={value._id} src={value.url} />;
					})}
				</div> */}

				<div>
					<div className="border-2 rounded-lg p-5 mb-3 ">
						<div className="mb-3">
							<span>Start Date : </span>
							<p className="border-2 p-2 rounded-lg">
								{startDate}
							</p>
						</div>

						<div>
							<span>Deadline : </span>
							<p className="border-2 p-2 rounded-lg">
								{completionDate}
							</p>
						</div>
					</div>
					<div className="border-2 rounded-lg p-5">
						<span>Comments :</span>
						<div className="border-2 rounded-lg p-2">
							{comments.map(value => {
								return (
									<div className="p-2">
										<div>
											<span>
												By : {value.messagedBy}
											</span>
											<p>
												{value.message}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShowAssignedTask;
