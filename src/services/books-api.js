export async function getBooks(bookId = false, searchParam = false) {
    try {
        const URL = process.env.REACT_APP_BOOKS_API_URL;
        let route = '/books';

        if (bookId) {
            route = `/book/${bookId}`
        } else if (searchParam) {
            route = `/books?search_param=${searchParam}`
        }

        const response = await fetch(`${URL}${route}`);
        return await response.json();
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function addBook(title, isbn, authors = []) {
    try {
        const URL = `${process.env.REACT_APP_BOOKS_API_URL}/book`;
        const postData = { title, isbn, authors };
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });
        const resData = await response.json();

        if (response.status === 500) {
            throw new Error(resData.error);
        }

        return resData;

    } catch (err) {
        return { error: err.message };
    }
}

export async function updateBook(bookId, bookValues) {
    try {
        const URL = `${process.env.REACT_APP_BOOKS_API_URL}/book/${bookId}`;
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookValues),
        });
        return await response.json();

    } catch (error) {
        return { error };
    }
}

export async function getAuthors(authorId = false, searchParam = false) {
    try {
        const URL = process.env.REACT_APP_BOOKS_API_URL;
        let route = '/authors';

        if (authorId) {
            route = `/author/${authorId}`
        } else if (searchParam) {
            route = `/authors?search_param=${searchParam}`
        }

        const response = await fetch(`${URL}${route}`);
        return await response.json();
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function addAuthor(firstName, lastName = '') {
    try {
        const URL = `${process.env.REACT_APP_BOOKS_API_URL}/author`;
        const postData = { first_name: firstName, last_name: lastName };
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });
        const resData = await response.json();

        if (response.status === 500) {
            throw new Error(resData.error);
        }

        return resData;

    } catch (err) {
        return { error: err.message };
    }
}

export async function updateAuthor(authorId, authorValues) {
    try {
        const URL = `${process.env.REACT_APP_BOOKS_API_URL}/author/${authorId}`;
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(authorValues),
        });
        return await response.json();

    } catch (error) {
        return { error };
    }
}