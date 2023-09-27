import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';

const Home = lazy(() => import('./pages/Home'));
const Books = lazy(() => import('./pages/Books'));
const BookSingle = lazy(() => import('./pages/BookSingle'));
const Authors = lazy(() => import('./pages/Authors'));


function App() {
	return (
		<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
			<Router>
				<AppHeader />
				<Suspense fallback={""}>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="books" element={<Books />} />
						<Route path="books/:id" element={<BookSingle />} />
						<Route path="authors" element={<Authors />} />
					</Routes>
				</Suspense>
				<AppFooter />
			</Router>
		</div>
	);
}

export default App;
