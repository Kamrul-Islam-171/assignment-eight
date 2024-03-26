
export const getLocalData = () => {
    const data = localStorage.getItem('allReadedBooks');
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

export const storeToLocalStorage = (book) => {
    const allbooks = getLocalData();
    const exist = allbooks.find(item => item.bookId == book.bookId);
    if (exist) {
        // alert('already added!');
        return true;

    }
    allbooks.push(book);
    localStorage.setItem('allReadedBooks', JSON.stringify(allbooks));

}
