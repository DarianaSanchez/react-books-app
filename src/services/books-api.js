export async function getBooks(bookId = false, searchParam = false) {
    const URL = process.env.REACT_APP_BOOKS_API_URL;
    let route = '/books';

    if (bookId) {
        route = `/book/${bookId}`
    } else if (searchParam) {
        route = `/books?search_param=${searchParam}`
    }

    const response = await fetch(`${URL}${route}`);
    return await response.json();
}
