import React, { useState } from 'react';
import InputField from '../InputFields';
import SelectField from '../SelectField';
import Layout from '../Layout';
import Button from '../Custom/Button';

const ProjectForm = () => {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		start_date: '',
		end_date: '',
		owner: '',
		status: '',
		tags: '',
		visibility: '',
		members: ' ',
		workspaceId: ''
	});

	const getFormData = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const createProject = () => {

	}

	return (
		<Layout heading={'Discuss'}>
			<div className=" px-2 h-4/5 flex flex-col gap-5 ">
				<div className="flex justify-center items-center h-full gap-5">
					<div className="w-11/12 h-full border ">
						<p className='mb-5'>Create New Project</p>
						<div>
							<InputField
								label={'Title'}
								type={'text'}
								name={'title'}
								value={formData.title}
								placeholder={'Enter Project Title'}
								callback={getFormData}
							/>
							<InputField
								label={'Description'}
								type={'text'}
								name={'description'}
								value={formData.description}
								placeholder={'Enter Project Description'}
								callback={getFormData}
							/>
							<InputField
								label={'Start Date'}
								type={'date'}
								name={'start_date'}
								value={formData.start_date}
								placeholder={'Enter Start Date'}
								callback={getFormData}
							/>
							<InputField
								label={'End Date'}
								type={'date'}
								name={'end_date'}
								value={formData.end_date}
								placeholder={'Enter End Date'}
								callback={getFormData}
							/>
							<SelectField
								placeHolder={'Select Status'}
								options={['Active', 'Hold', 'Pending']}
								label={'Title'}
								type={'text'}
								name={'status'}
								value={formData.status}
								placeholder={'Enter Project Title'}
								callback={getFormData}
							/>
							<InputField
								label={'Tags'}
								type={'text'}
								name={'tags'}
								value={formData.title}
								placeholder={'Enter Project Title'}
								callback={getFormData}
							/>

							<InputField
								label={'Members'}
								type={'text'}
								name={'members'}
								value={formData.title}
								placeholder={'Enter Project Title'}
								callback={getFormData}
							/>
							<div>
								<Button text={"Save"} callback={createProject} size={"text-xl"} color={"bg-sky-400"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ProjectForm;
