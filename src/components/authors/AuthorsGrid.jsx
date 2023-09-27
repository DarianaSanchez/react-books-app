import { useState, useEffect, useContext } from "react";
import { FiSearch } from 'react-icons/fi';
import Button from "../reusable/Button";
import AuthorItem from './AuthorItem';
import AuthorFormModal from "./AuthorFormModal";
import ModalContext from '../../context/ModalContext';
import CollectionsContext from '../../context/CollectionsContext';
import { getAuthors } from "../../services/books-api";

const AuthorsGrid = () => {
	const { authors, setAuthors } = useContext(CollectionsContext);
	const { showAuthorModal, toogleAuthorModal } = useContext(ModalContext);
	const [searchParam, setSearchParam] = useState("");

	useEffect(() => {
		let isCancelled = false;

		getAuthors()
		.then((result) => {
			if (!isCancelled) setAuthors(result);
		});

		return () => isCancelled = true;
		
	}, [setAuthors]);

	const handleChange = (event) => {
		const param = event.target.value.trim();
		setSearchParam(param);
		getAuthors(false, param).then((result) => setAuthors(result));
	};

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Authors
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				<h3
					className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
				>
					Search authors by name
				</h3>
				<div
					className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
						</span>
						<input
							value={searchParam}
							onChange={handleChange}
							className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            	border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Authors"
							aria-label="Name"
						/>
					</div>

					<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
						<div className="hidden md:flex">
							<span
								onClick={toogleAuthorModal}
								className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
								aria-label="Add Author Button"
							>
								<Button title="Add New Author" />
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{authors.map((book) => (
					<AuthorItem
						key={book._id}
						id={book._id}
						firstName={book.first_name}
						lastName={book.last_name}
					/>
				))}
			</div>

			{/* Author form modal */}
			<div>
				{showAuthorModal ? (
					<AuthorFormModal closeModal={toogleAuthorModal} />
				) : null}
				{showAuthorModal ? toogleAuthorModal : null}
			</div>
		</section>
	);
};

export default AuthorsGrid;
