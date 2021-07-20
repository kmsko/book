import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://www.googleapis.com/books/v1/volumes`,

})
const API_KEY = "&key=AIzaSyDpM1nzF1_LDeDsgBln9osUhWVedc4H57E"


export const SearchBooks = {
    searchBooksTitel(params){
        return instance.get(`?q=${params.textBooks}${params.categories}&orderBy=${params.sortingBy}&startIndex=0&maxResults=30`+API_KEY)
    },
    loadMore(params){
        return instance.get(`?q=${params.textBooks}`+`&startIndex=${params.startIndex}&maxResults=10`+API_KEY)
    },
    getBook(params){
        return instance.get(`/${params}?key=AIzaSyDpM1nzF1_LDeDsgBln9osUhWVedc4H57E`)
    }
}
// "&startIndex=1&maxResults=30"
// getBook(params){
//     return instance.get(`${params.textBooks}`+"&startIndex=3&maxResults=30"+API_KEY)
// }


// export const UsersAPI = {
//     getUsers(curentPage = 1, pageSize = 5) {
//         return instance.get(`users?page=${curentPage}&count=${pageSize}`)
//     },
//     followAPI(userId) {
//         return instance.post(`follow/${userId}`)
//     },
//     unfollowAPI(userId) {
//         return instance.delete(`follow/${userId}`)
//     }
// }


