import { useRef, useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from '../reusable/Button';
import CollectionsContext from '../../context/CollectionsContext';
import { getAuthors, addAuthor, updateAuthor } from '../../services/books-api';


const AuthorFormModal = ({ closeModal }) => {
	const authorId = useRef();
	const firstName = useRef();
	const lastName = useRef();
	const [alertMessage, setAlertMessage] = useState('');
	const { setAuthors } = useContext(CollectionsContext);

	useEffect(() => {
		let isCancelled = false;
		authorId.current = localStorage.getItem('current-author');
		
		if (authorId.current) {
			getAuthors(authorId.current)
			.then((result) => {
				if (!isCancelled) {
					firstName.current.value = result.first_name;
					lastName.current.value = result.last_name;
				}
			});
		}

		return () => isCancelled = true;
		
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		setAlertMessage('');

		const firstNameArg = firstName.current.value.trim();
		const lastNameArg = lastName.current.value.trim();
		const callBack = (res) => {
			if (res.error) {
				setAlertMessage(res.error);
			} else {
				getAuthors().then((result) => setAuthors(result));
				closeModal();
			}
		}

		if (authorId.current) {
			updateAuthor(
				authorId.current, {
					first_name: firstNameArg,
					last_name: lastNameArg,
					full_name: `${firstNameArg} ${lastNameArg}`,
				}
			).then((result) => {
				callBack(result);
			});
		} else {
			addAuthor(
				firstNameArg, lastNameArg
			).then((result) => {
				callBack(result);
			});
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center z-30">
					<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
						<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className=" text-primary-dark dark:text-primary-light text-xl">
								Author Form
							</h5>
							<button
								onClick={closeModal}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<form
							name="author-form"
							onSubmit={handleSubmit}
							className="max-w-xl m-4 text-left"
						>
							<div className="modal-body p-5 w-full h-full">
								{alertMessage &&
									<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xs relative mb-5" role="alert">
										<strong className="font-bold">Error! </strong>
										<span className="block sm:inline">{alertMessage}</span>
									</div>
								}
								<div>
									<input
										ref={firstName}
										id="first-name"
										name="first-name"
										type="text"
										placeholder="First Name"
										aria-label="Author First Name"
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										required
									/>
								</div>
								<div className="mt-6">
									<input
										ref={lastName}
										id="last-name"
										name="last-name"
										type="text"
										placeholder="Last Name"
										aria-label="Author Last Name"
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										required
									/>
								</div>
							</div>
							<div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
								<span
									onClick={closeModal}
									type="button"
									className="px-4
									sm:px-6
									py-2 bg-gray-600
									text-primary-light
									hover:bg-ternary-dark
									rounded-md
									focus:ring-1 focus:ring-indigo-900 duration-500"
									aria-label="Close Modal"
								>
									<Button title="Close" />
								</span>
								<span
									type="submit"
									role="button"
									className="px-4
										sm:px-6
										py-2
										ml-2
										text-white
										bg-indigo-500
										hover:bg-indigo-600
										rounded-md
										focus:ring-1 focus:ring-indigo-900 duration-500"
									aria-label="Submit Request"
								>
									<Button title="Save" />
								</span>
							</div>
						</form>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default AuthorFormModal;
