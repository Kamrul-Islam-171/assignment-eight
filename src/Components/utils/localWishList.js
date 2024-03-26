import { getLocalData } from "./localStorageData";

export const getLocalWishListData = () => {
    const data = localStorage.getItem('allWishListBooks');
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

export const storeWishListToLocalStorage = (book) => {
    const allbooks = getLocalWishListData();
    const exist = allbooks.find(item => item.bookId == book.bookId);
    if (exist) {
        // alert('already added to wishlist!');
        return true;

    }
    allbooks.push(book);
    localStorage.setItem('allWishListBooks', JSON.stringify(allbooks));

}

export const isRead = (book) => {
    const allbooks = getLocalData();
    const exist = allbooks.find(item => item.bookId == book.bookId);
    if(exist) {
        return true;
    }
    return false;
}
