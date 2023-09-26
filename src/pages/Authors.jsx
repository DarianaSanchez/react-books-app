import AuthorsGrid from '../components/authors/AuthorsGrid';
import { ModalViewProvider } from '../context/ModalContext';
import { CollectionsProvider } from '../context/CollectionsContext';

const Authors = () => {
	return (
		<ModalViewProvider>
			<CollectionsProvider>
				<div className="container mx-auto">
					<AuthorsGrid />
				</div>
			</CollectionsProvider>
		</ModalViewProvider>
	);
};

export default Authors;
